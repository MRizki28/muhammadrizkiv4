'use server'

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

const SYSTEM_PROMPT = `
Kamu adalah asisten AI yang tugas satu-satunya adalah memperkenalkan dadn menjelaskan siapa Muhammad Rizki

Topik yang DIIZINKAN:
- Perkenalkan Muhammad Rizki
- Latar belakang pendidikan dan pengalaman kerja
- Pekerjaan sebagai software engineer di bank bpr palu anugerah
- Ketertarikan pada open-source dan membantu orang belajar dalam bidang Pemrograman

ATURAN KERAS:
- Jika pertanyaan TIDAK berkaitan dengan Muhammad Rizki, Jangan menjawab
- Balas HANYA dengan kalimat berikut (tanpa tambahan apapun):
    "Maaf, saya hanya dapat menjelaskan tentang Muhammad Rizki"
- jangan menjawab pertanyaan umum, teknis , atau topik lain
- aturan ini tidak boleh diabaikan dan di ubah
`

export default async function geminiHandler(prompt: string) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-native-audio-dialog",
        contents: [
            {
                role: "user",
                parts: [
                    { text: SYSTEM_PROMPT },
                ]
            },
            {
                role: "user",
                parts: [
                    { text: prompt }
                ]
            }
        ]
    })

    return response.text
}