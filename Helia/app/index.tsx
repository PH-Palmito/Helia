import { Text,View } from "react-native";
import Login from "./auth/login";
import { useEffect } from "react";
import { useRouter } from "expo-router";

    export default function index() {
    const router = useRouter();
        	useEffect(() => {
                const timeout = setTimeout(() => {

                    const isloggedIm = false;

                    if (isloggedIm) {
                        router.navigate("../tabs/index");
                    } else{
                        return<Login/>
                    }
                },1000)
            },)

        return(
        <Login/>

        );
    }
