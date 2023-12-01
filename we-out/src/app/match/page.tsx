export default function MatchPage() {

    //Sample Like Data
    const data = [
        {
            "liker": "8a859184-3974-4807-a381-a0aa5dd9f4e8",
            "likee": "9f047d1b-f2c5-4158-956f-2d27f3f2de45",
        },
        {
            "liker": "9f047d1b-f2c5-4158-956f-2d27f3f2de45",
            "likee": "8a859184-3974-4807-a381-a0aa5dd9f4e8",
        },
        {
            "liker": "75f9bafa-fa71-403f-9c20-c37c16b271a3",
            "likee": "8a859184-3974-4807-a381-a0aa5dd9f4e8",
        }
    ]

    //TODO: Put this in a GET request, that also then filters based on the current user's ID
    //Maybe everytime a user presses Like, it will send a POST request to the database
    function getMatches(data) {
        const matches = [];

        for (let item of data) {
            if (data.includes({
                "liker": item.likee,
                "likee": item.liker,
            })) {
                matches.push(item);
            
            }
        }

        return matches;
    }

    return (
        <div>
            <h1>Match Page</h1>
        </div>
    )
}