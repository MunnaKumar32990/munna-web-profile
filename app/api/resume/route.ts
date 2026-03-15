import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Get the absolute path to the resume file
    const filePath = path.join(process.cwd(), 'public', 'Munna_Kumar_Resume.pdf');
    
    // Check if file exists
    try {
      await fs.access(filePath);
    } catch (error) {
      console.error('Resume file not found:', error);
      return new NextResponse('Resume file not found', { status: 404 });
    }

    // Read the file
    const fileBuffer = await fs.readFile(filePath);

    // Return the file with proper headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Munna_Kumar_Resume.pdf"',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Error serving resume:', error);
    return new NextResponse('Error serving resume', { status: 500 });
  }
} 