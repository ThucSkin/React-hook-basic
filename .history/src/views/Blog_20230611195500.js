import useFetch from "../customize/Fetch";

const Blog = () => {
    const { data: dataBlogs, loading }
        = useFetch(`https://reqres.in/api/users?page=2`, false);
    let newData = [];

    if (dataBlogs.length > 0 && dataBlogs) {
        newData = dataBlogs;
    }

    return (
        <>
            {newData && newData.length > 0 &&
                newData.map(item => {
                    return (
                        <>
                            <div>{item.id}</div>
                            <div>{item.first_name}</div>
                            <div>{item.last_name}</div>
                            <div>{item.email}</div>
                        </>
                    )

                })}
        </>
    )
}

export { Blog };