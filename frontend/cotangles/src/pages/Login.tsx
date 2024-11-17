import "../App.css";
import { CardTop, CardBody, CardHeader, CardAuth } from "@/components/ui/card";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { Button } from "@/components/ui/button";

function Login() {
  return (
    <>
      <ContentWrapper>
        {/* Title */}
        <CardTop>
          <CardHeader>
            <h1>Login</h1>
          </CardHeader>
        </CardTop>
        {/* Body */}
        <CardBody
          className="bg-auth-decorator bg-contain bg-no-repeat bg-center"
          style={{ backgroundColor: "#fff8e1" }}
        >
          <CardAuth>
            <Button>google authentication here</Button>
          </CardAuth>
        </CardBody>
      </ContentWrapper>
    </>
  );
}

export default Login;
