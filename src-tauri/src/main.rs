// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use sysinfo::{Disks, System};
use std::collections::HashMap;
use std::fs;
use std::env;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn getSystemMemory() -> u32 {
    let s = System::new_all();
    let mem = s.total_memory() as f64 / 1024.0 / 1024.0 / 1024.0;
    let mem = if mem > 32.0 {
        64
    } 
    else if mem > 16.0 {
        32
    } else if mem > 8.0 {
        16
    } else {
        8
    };
    mem
}

#[tauri::command]
fn getFreeDiskSpace() -> Vec<u64> {
    let disks = Disks::new_with_refreshed_list();
    let mut result = vec![];
    for disk in disks.list() {
        result.push(disk.available_space());
    }
    return result;
}

#[tauri::command]
fn getTotalDiskSpace() -> Vec<u64> {
    let disks = Disks::new_with_refreshed_list();
    let mut result = vec![];
    for disk in disks.list() {
        result.push(disk.total_space());
    }
    return result;
}

#[tauri::command]
fn getInstalled() -> HashMap<String, String> {
    let systems = ["Microsoft XBOX", "Microsoft XBOX 360", "Nintendo 3DS", "Nintendo Gamecube",
    "Nintendo Switch", "Nintendo Wii", "Nintendo Wii U", "Sony Playstation",
    "Sony Playstation 2", "Sony Playstation 3", "Sony Playstation 4", "Sony PSP",
    "Nintendo 64", "Nintendo DS", "Nintendo Entertainment System",
    "Nintendo Game Boy", "Super Nintendo Entertainment System", "Sega Genesis"];
    let mut xmlMap = HashMap::new();
    for system in systems {
        let mut systemPath = "/Arcade/Databases/".to_string();
        systemPath.push_str(system);
        systemPath.push_str("/");
        systemPath.push_str(system);
        systemPath.push_str(".xml");
        let string = fs::read_to_string(systemPath).expect("Unable to read file.");
        xmlMap.insert(system.to_string(), string);
    }
    xmlMap
}

fn main() {
    env::set_var("RUST_BACKTRACE", "1");
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![getSystemMemory, getFreeDiskSpace, getTotalDiskSpace, getInstalled])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
