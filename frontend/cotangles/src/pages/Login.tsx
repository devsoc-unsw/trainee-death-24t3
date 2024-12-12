import "../App.css";
import { CardTop, CardBody, CardHeader, CardAuth } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sparkle from "@/assets/svg/sparkle.svg";
import squiggle_arrow from "@/assets/svg/squiggle_arrow.svg"
import { login } from "@/utils/accountSettings";

function Login() {
  return (
    <>
        {/* Title */}
        <CardTop>
          <CardHeader>
            <h1>Register & Login</h1>
          </CardHeader>
        </CardTop>
        {/* Body */}
        <CardBody
          className="bg-auth-decorator bg-contain bg-no-repeat bg-center"
          style={{ backgroundColor: "#fff8e1"}}
        >
          <CardAuth>
            <h1 className="text-center">Collaborative calendar management made <b>simple</b>.</h1>
            <p>See all your calendars in <b>one place</b>.</p>
            <p>Join your friends with <b>one click</b>.</p>
            <p>It's as easy as logging in with Google.</p>
            <div className="flex justify-center items-center h-[20%]">
              <img src={squiggle_arrow} className="scale-50" alt="squiggly arrow"/>
              <Button className="rotate-3 w-[200px]" onClick={login}>Login with Google</Button>
              <img src={sparkle} className="scale-50 mb-10" alt="sparkle"/>
            </div>
          </CardAuth>
        </CardBody>
    </>
  );
}

export default Login;
