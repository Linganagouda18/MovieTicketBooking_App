
import { Inngest } from "inngest";
import User from "../models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });


//inngest function to save user data to a adatabase

// 1. we can store the userdata in mongodb
// 2. get the userdata in clerk

const SyncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    {
        event : 'clerk/user.created'
    },

    async ({event}) => {
        const {id,first_name , last_name , email_addresses , image_url} = event.data 

        const userData = {
            _id : id ,
            email : email_addresses[0].email_address,
            name :first_name + ' ' + last_name,
            image : image_url
        }

        await User.create(userData)
    }
)


// inngest function to delete user from database


const SyncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-from-clerk'
    },
    {
        event : 'clerk/user.deleted'
    },

    async ({event}) => {
      
        const {id} = event.data
        await User.findByIdAndDelete(id)
    }
)


//inngest function to update the userdata in database

const SyncUserUpdate = inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    {
        event : 'clerk/user.updated'
    },

    async ({event}) => {
       const {id,first_name , last_name , email_addresses , image_url} = event.data 

        const userData = {
            _id : id ,
            email : email_addresses[0].email_address,
            name :first_name + ' ' + last_name,
            image : image_url
        }

        await User.findByIdAndUpdate(id , userData)
    }
)



// Create an empty array where we'll export future Inngest functions
export const functions = [SyncUserCreation ,
                         SyncUserDeletion,
                         SyncUserUpdate];