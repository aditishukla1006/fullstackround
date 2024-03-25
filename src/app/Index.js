const Users = async() => {

    console.log("Hello");
    const ret = await getServerSideProps();
    console.log(ret);
    if("notFound" in ret){
        return  <h1>Page not found</h1>;
    } else {
        return (
             <main>
               <h1 className="text-3xl font-semibold mb-8">All Users</h1>
               <User users={ret}/>
            </main>
          );
    }
    
  };
  
  const User = ({ users }) => {
    return (
      <div>
        <h1>All Users</h1>
        {users.map(user => (
          <div key={user.id}>
            <a href={`https://jsonplaceholder.typicode.com/users`}>
              <h3>{user.name}</h3>
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    if (!users) {
      return {
        notFound: true,
      };
    }
  
    return  users;

  }
  
  export default Users;
  