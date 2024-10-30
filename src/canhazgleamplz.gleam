import gleam/io

@external(javascript, "./ok.ffi.mjs", "print")
pub fn print(str: String) -> Nil

pub fn main(){
  io.println("Hello from io!")
  print("Hello from Gleam JS FFI!")
}
