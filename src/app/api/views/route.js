import { ref, runTransaction, get } from "firebase/database";
import { db } from "@/lib/firebase-admin";
import { NextResponse } from "next/server";

// This sends a message to the server.
export async function POST(request) {
    // Basically we're trying to send a message to the server saying let's increase the view count.
    try {
        const body = await request.json();
        const page = body?.page || 'homepage'; // what's this?

        const viewRef=ref(db,`views/${page}`); // What does ref do, and what does that page mean?
        const result = runTransaction(viewRef,(currentData)=>{return(currentData||0)+1;})
        return NextResponse.json({count:(await result).snapshot.val()});
    } catch(error) {
        console.error("Error incrementing view count:",error);
        return NextResponse.json({error: 'Failed to increment view count'}, {status: 500});
    }
}