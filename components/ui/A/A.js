import Link from "next/link";


export const A = ({text,href}) => {
    return (
        <Link href={href} legacyBehavior>
            <a>{text}</a>
        </Link>
    );
};