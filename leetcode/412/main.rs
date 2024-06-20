

pub fn fizz_buzz(n : i32) -> Vec<String> {

    let mut return_arr : Vec<String> = vec![]; 

        
    for i in 1..=n {

        if (i % 3) == 0 && (i % 5) == 0 {
            return_arr.push(String::from("FizzBuzz"));
        } 

        else if (i % 3) == 0 {
            return_arr.push(String::from("Fizz"));
        }
        
        else if (i % 5) == 0 {
            return_arr.push(String::from("Buzz"))
        }
        
        else {
            return_arr.push(String::from(i.to_string()));
        }

    }


    return return_arr;

}


fn main() {

    println!("{:?}", fizz_buzz(15));


}

