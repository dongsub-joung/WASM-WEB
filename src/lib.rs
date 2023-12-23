use wasm_bindgen::prelude::*;


#[wasm_bindgen]
struct Btn{
    count: u128,
}

#[wasm_bindgen]
impl Btn {
    pub fn new()-> Self{
        Self{
            count: 0,
        }
    }
    pub fn counting(mut self)-> Self{
        self.count+=1;
        self
    }
}

#[wasm_bindgen]
pub fn clicked_btn_then_counting(btn: Btn) -> Btn {
    Btn::counting(btn)
}