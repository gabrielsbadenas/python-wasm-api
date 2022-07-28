mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    //for i in 0..5 {
      //  println!("{}",i)
    //}
    let num: i32 = 2;
    let mun: i32 = 3;
    let mut res: i32 = num + mun;
    for i in 0..5 {
        res += num + mun
    }
    //let res: i32 = num+mun;
    alert(&res.to_string());
}
