"use client";
import { useEffect, useState } from "react";
import { authClient, signOut } from "@/lib/auth-client";
import { Car } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const router = useRouter();
  const { data, isPending } = authClient.useSession();

  const user = data?.user;

  const handleLogout = async () => {
    try {
      await signOut();

      toast.success("Logout successfully!");

      setTimeout(() => {
        router.push("/");
        window.location.reload();
      }, 1500);
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className="navbar flex justify-between items-center fixed md:px-10 backdrop-blur-xl top-0 left-0 w-full z-50 bg-tranparent 
    border-b border-white/10"
    >
      <Toaster />
      <div className="Left flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm bg-base-100 dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/explore-cars">Explore Cars</Link>
            </li>

            <li>
              <Link href="/add-car">Add Car</Link>
            </li>

            <li>
              <Link href="/my-bookings">My Bookings</Link>
            </li>
            <li>
              <Link href="/my-profile">My Profile</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-1 items-center">
          <div>
            <Car className="w-8 md:w-10 h-8 md:h-10" color="orange"></Car>
          </div>
          <Link
            href="/"
            className="font-bold text-blue-500 text-2xl md:text-4xl"
          >
            DriveFleet
          </Link>
        </div>
      </div>

      <div className="Right flex items-center gap-5">
        <div className="Route-links hidden lg:flex">
          <ul className="flex gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/explore-cars">Explore Cars</Link>
            </li>

            <li>
              <Link href="/add-car">Add Car</Link>
            </li>

            <li>
              <Link href="/my-bookings">My Bookings</Link>
            </li>
            <li>
              <Link href="/my-profile">My Profile</Link>
            </li>
          </ul>
        </div>

        {isPending ? (
          <h2>Loading.....</h2>
        ) : user ? (
          <div className="flex items-center gap-3">
            <div className="text-right leading-tight">
              <p className="hidden md:flex text-sm font-semibold truncate max-w-30">
                Hi, {user.name}
              </p>
            </div>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="cursor-pointer">
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href="/my-profile">My Profile</Link>
                </li>
                <li>
                  <Link href="/add-car">Add Car</Link>
                </li>

                <li>
                  <Link href="/my-bookings">My Bookings</Link>
                </li>

                <li>
                  <Link href="/my-added-cars">My Added Cars</Link>
                </li>

                <Button className="" variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </ul>
            </div>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="cursor-pointer">
              <Image
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52mx-auto px-5 py-10 shadow"
            >
              <div className="flex border">
                <li>
                  <Link href="/signin">
                    <Button className="w-full border-none" variant="outline">
                      Sign In
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/signup">
                    <Button className="w-full border-none" variant="outline">
                      Sign Up
                    </Button>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
    
  );
};

export default Navbar;
