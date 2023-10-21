import Link from 'next/link';

const Header = () => {
    return ( 
        <>
        <div className="header">
            <Link href="/">
              <img src="/brewood-logo.png" alt="Brewood Cricket Club Quiz" />  
            </Link>
            
            <ul>
                                <li>
                    <Link href="/round-list">
                        Round List
                    </Link>
                </li>
                <li>
                    <Link href="/round-1">
                        Round 1
                    </Link>
                </li>
                <li>
                    <Link href="/round-2">
                        Round 2
                    </Link>
                </li>
                <li>
                    <Link href="/round-3">
                        Round 3
                    </Link>
                </li>
                <li>
                    <Link href="/round-4">
                        Round 4
                    </Link>
                </li>
                <li>
                    <Link href="/round-5">
                        Round 5
                    </Link>
                </li>
                <li>
                    <Link href="/round-6">
                        Round 6
                    </Link>
                </li>
                <li>
                    <Link href="/round-7">
                        Round 7
                    </Link>
                </li>
                <li>
                    <Link href="/round-8">
                        Round 8
                    </Link>
                </li>
            </ul>
        </div>
        </>
     );
}
 
export default Header;