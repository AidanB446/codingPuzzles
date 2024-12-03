
use std::fs;

pub fn solution() -> i32 {
    let data : String = fs::read_to_string("./input.txt").unwrap();

    let mut total_result = 0;    
    
    let split_data : Vec<&str> = data.split("mul(").collect();

    for line in split_data {
        
        let mut first_num = 0;
        let mut second_num = 0;

        let split_split_data : Vec<&str> = line.split(",").collect(); 
        
        if split_split_data[0].parse::<f64>().is_ok() {
            first_num = split_split_data[0].parse::<i32>().unwrap(); 
        } else {
            break;
        }
        
        // second num 
        let pos_second_num_arr : Vec<&str> = split_split_data[1].split(")").collect();

        if pos_second_num_arr[0].len() < 4 && pos_second_num_arr[0].parse::<f64>().is_ok() {
            second_num = pos_second_num_arr[0].parse::<i32>().unwrap();
        } else {
            break;
        }
    
        total_result = total_result + (first_num * second_num); 
    }
    
    return total_result;
}

fn main() {
    println!("{:?}", solution());
}

