import useFetch from "../customize/Fetch";

const Blog = () => {
    const { dataUsers: dataBlogs, loading } = useFetch('https://reqres.in/api/users?page=2', false)
    let newData = [];

    if (dataBlogs.length > 0 && dataBlogs) {
        newData = dataBlogs;
    }

    return (
        <>
            {newData && newData.length > 0 &&
                newData.map(item => {
                    <div>
                        {item.id}
                    </div>
                })}
        </>
    )
}

export { Blog };