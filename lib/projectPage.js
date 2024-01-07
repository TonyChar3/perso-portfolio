/**
 * Function to fetch the projects
 */
const fetchProjects = async() => {
    try{
        const response = await fetch('http://localhost:3000/api/getProjects',{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
            }
        });
        const projects = await response.json()
        return projects
    } catch(err){
        console.log(err);
    }
}

export { fetchProjects }