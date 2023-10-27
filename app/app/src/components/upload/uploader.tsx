"use client"

import React, { useRef } from "react";
import exif from 'exifr';

interface UploaderProps {
    callback: (data: any) => void
}

const convertBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => resolve(fileReader.result);
        fileReader.onerror = (error) => reject(error);
    });
};

const uploader: React.FC<UploaderProps> = function({callback}: UploaderProps) {
    const input = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async () => {
            const res = await Promise.all(Array.from(input.current?.files||[]).map(async f => ({
                date: await exif.parse(f).then(meta => meta?.DateTimeOriginal),
                data: await convertBase64(f)
            })));

            console.log(res);
            callback(res);
    }

    return (
        <div className="uploader">
            <input type="file" multiple ref={input}/>
            <button type="button" onClick={handleSubmit}>Upload</button>
        </div>
    )
}

export default uploader;