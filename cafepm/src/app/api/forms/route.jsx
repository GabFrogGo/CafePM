import connectDB from '@/libs/mongodb.jsx'
import FormAcc from '../../../../models/formsensitive'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const { creationDate, id, folderID, type, reprompt, favourite, name, notes } = await request.json()
    await connectDB
    await FormAcc.create({ creationDate, id, folderID, type, reprompt, favourite, name, notes })
    return NextResponse.json({message: 'Create new element'}, { status: 201 })
}

export async function GET() {
    await connectDB()
    const forms = await FormAcc.find()
    return NextResponse.json({forms})
}