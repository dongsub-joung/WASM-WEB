// lib.rs (Rust code)

use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{Document, Element, HtmlImageElement, Window};

#[wasm_bindgen]
pub fn add_image(src: &str, alt: &str) -> Result<(), JsValue> {
    // Get window, document, and body elements
    let window = web_sys::window().ok_or("No window found")?;
    let document = window.document().ok_or("No document found")?;
    let body = document.body().ok_or("No body found")?;

    // Create img element
    let img = document.create_element("img")?.unchecked_into::<HtmlImageElement>();
    img.set_src(src);
    img.set_alt(alt);

    // Append img to the body
    body.append_child(&img)?;
    
    Ok(())
}
