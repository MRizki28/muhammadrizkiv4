export default function Footer() {
    return (
        <footer className=" py-6 ">
            <div className="max-w-screen-xl mx-auto text-center">
                <p className="text-sm  dark:text-gray-300">
                    &copy; {new Date().getFullYear()} Muhammad Rizki. All rights reserved.
                </p>
            </div>
        </footer>
    )
}