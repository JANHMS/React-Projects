import Link from 'next/link';

const Navbar = () => {
  const styles = {
    display:'felx',
    background:'green',
    justifyContent:'space-between',
    padding: '1rem',


  };
  return(
      <div style={styles}>
      <Link href='/about'>
        <a>About Page</a>
      </Link>
      <Link href='/contact'>
        <a>Contact Page</a>
      </Link>
      <Link href='/'>
        <a>Home</a>
      </Link>
        <h1>Our Page</h1>
      </div>
      )
    };
    export default Navbar;
