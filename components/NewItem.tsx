"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { Label } from "@/components/ui/label"
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";

export default function NewItem() {
    const [platform , setPlatform] = useState("");
    // const inputData:any[] = [];

    async function onSubmit(event: FormEvent<HTMLFormElement>){ 
        console.log("Working")
        event.preventDefault();

        const form = event.target as HTMLFormElement; 
        const formData = new FormData(form);
        formData.append("platform", platform);
        const data = Object.fromEntries(formData);

        // inputData.push(data); 
        // console.log(data)
    
        const response = await axios.post("http://localhost:3000/api/content", { 
            title:data.title, 
            link:data.url, 
            tag:[platform], 
            userId:14
        })

        if(response?.data){ 
            redirect("/dashboard")
        }
        console.log(response)
    }


    return <div className="w-full h-screen flex items-center justify-center">
        <Card className="w-lg">
            <CardHeader>
                Create Project
            <CardDescription>Save your important links here</CardDescription>
            </CardHeader>
            <form onSubmit={onSubmit}>
                <CardContent>
                    <div className="flex w-full items-start flex-col gap-2">
                        <div className="flex w-80 flex-col gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input type="text" name="title" id="title" placeholder="Write the title here" />
                            <Label htmlFor="url">Url Id</Label>
                            <Input type="text" name="url" id="url" placeholder="Page the url here" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="plateform" >Plateform</Label>
                            <Select onValueChange={setPlatform}>
                                <SelectTrigger id="plateform">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="youtube" >Youtube</SelectItem>
                                    <SelectItem value="twitter">Twitter</SelectItem>
                                    <SelectItem value="spotify">Spotify</SelectItem>
                                    <SelectItem value="tiktok">reddit</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
            </CardContent>
            <CardFooter>
                <div className="flex justify-between w-full pt-4">
                    <Button onClick={() => redirect("/dashboard")} type="submit" variant="destructive" >Cencel</Button>
                    <Button type="submit" variant="outline">Create</Button>
                </div>
                </CardFooter>
             </form>
        </Card>       
    </div>
}


