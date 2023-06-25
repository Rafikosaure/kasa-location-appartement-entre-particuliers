import { useState } from "react";
import { useEffect } from "react";


function Sources() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    },  [])
  
    if (error) {
        return console.log(`Erreur : ${error}`)
    } else if (!isLoaded) {
        return console.log("Chargement...")
    } else {
        return console.log(items)
    }
}

export default Sources