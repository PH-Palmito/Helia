import { Text,View } from "react-native";
import Login from "./stacks/login";
import { useEffect } from "react";
import { router, useRouter } from "expo-router";

    export default function index() {
    const router = useRouter();
        	useEffect(() => {
                const timeout = setTimeout(() => {

                    const isloggedIm = false;

                    if (isloggedIm) {
                        router.navigate("../tabs/home");
                    } else{
                        return<Login/>
                    }
                },1000)
                return() => clearTimeout(timeout);
            }, [router]);

         return <Login/>
    }
