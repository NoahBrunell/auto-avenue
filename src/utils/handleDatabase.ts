"use server"
import { db } from './db'

db.connect().then((res) => console.log('Connected')).catch((err) => console.log(err))

// Get all listings
export async function getAllListings() {
    const data = await db.query('SELECT * FROM listings')
    return data.rows
}

// Get one specific listing
export async function getListingById(listingId:string) {
    const id = Number(listingId)
    const data = await db.query('SELECT * FROM listings WHERE id = $1', [id])
    return data.rows
}

// Get location specific listings
export async function getListings(location:string) {
    const data = await db.query('SELECT * FROM listings WHERE location = $1', [location])
    return data.rows
}

// Save listings to database
export async function saveListing(data:any) {
    try {
        await db.query("INSERT INTO listings(title, brand, model, mileage, description, location, number, email, price, year, imgURL) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", 
        [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10]])
        return 'Saved successfully'
    } catch (error) {
        console.log(error);
        return 'Something went wrong'
    }
}