"use server"
import { db } from './db'

// db.connect().then((res) => console.log('Connected')).catch((err) => console.log(err))

// export async function getData() {
//     const data = await db.query('SELECT * FROM projects')
//     return data.rows
// }

// export async function getTime() {
//     const data = await db.query('SELECT timer FROM projects')
//     return data.rows
// }

export async function getAllListings() {
    const data = await db.query('SELECT * FROM listings')
    return data.rows
}

export async function getListingById(listingId:string) {
    const id = Number(listingId)
    const data = await db.query('SELECT * FROM listings WHERE id = $1', [id])
    return data.rows
}

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

// export async function saveTime(time:number, id:number) {
//     try {
//         await db.query("UPDATE projects SET timer = $1 WHERE id = $2", 
//         [time, id])
//         return 'Saved successfully'
//     } catch (error) {
//         console.log(error);
//         return 'Something went wrong'
        
//     }
// }

// export async function saveTimestamp(id:number, type:string,) {
//     try {
//         await db.query("INSERT INTO projectlogs(id, type) VALUES ($1, $2)", 
//         [id, type])
//         return 'Saved timestamp successfully'
//     } catch (error) {
//         console.log(error);
//         return 'Something went wrong'
//     }
// }

// export async function getTimestamp(id:number) {
//     const data = await db.query('SELECT * FROM projectlogs WHERE id = $1', [id])
//     return data.rows
// }

// export async function deleteProject(id:number) {
//     try {
//         await db.query("DELETE FROM projects WHERE id = $1", 
//         [id])
//         return 'Deleted successfully'
//     } catch (error) {
//         console.log(error);
//         return 'Something went wrong'
        
//     }
// }