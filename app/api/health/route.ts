export async function GET(){
    return Response.json({
        success: true,
        message: "Bitmark attendance API is running",
        timestamp: new Date().toISOString(),
    })
}