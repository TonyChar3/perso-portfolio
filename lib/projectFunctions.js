/**
 * Function to fetch the projects
 */
const fetchProjects = async() => {
    try{
        const response = await fetch('https://perso-portfolio-six.vercel.app/api/getProjects',{
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

/**
 * Function to send the e-mail to my inbox
 */
const sendNewEmail = async(name, email, subject, message) => {
    try{
        const response = await fetch('/api/sendEmail',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
            },
            body: JSON.stringify({
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            })
        });

        const result = await response.json();
        return result
    } catch(err){
        console.log(err)
    }
}

export { fetchProjects, sendNewEmail }