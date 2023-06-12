import useFetch from "../customize/Fetch";

const Blog = () => {
    const { dataBlog, loading } = useFetch('https://reqres.in/api/users?page=1', false)
    console.log(">>>check", dataBlog)
    return (
        <div>Thuc</div>
    )
}

export { Blog };