import { NextRequest, NextResponse } from "next/server";
import validateUsername from "./util/validateUsername";

export default function middleware(req: NextRequest) {
    let username: string | string[] = req.url;

    username = username?.split("?")[1];
    if (!username) {
        return new NextResponse("No username parameter provided.");
    }

    username = username?.split("=");
    if (!username) {
        return new NextResponse("No username parameter provided.");
    }

    if (username[0] === "username") {
        username = username[1];
    } else {
        return new NextResponse("No username parameter provided.");
    }
    
    const validationResult = validateUsername(username);

    if (!validationResult.success) {
        return new NextResponse(validationResult.message);
    }
}

export const config = {
    matcher: ["/api/get(.*)"]
}