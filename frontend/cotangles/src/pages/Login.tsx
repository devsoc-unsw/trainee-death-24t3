import "../App.css";
import { CardTop, CardBody, CardHeader, CardAuth } from "@/components/ui/card";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { NavigationCotangles } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

function Login() {

  return (
    <>
    <NavigationCotangles/>
    <ContentWrapper>
      {/* navbar goes on top */}
      <CardTop>
          <CardHeader>
            <h1>Login</h1>
          </CardHeader>
      </CardTop>
      {/* jesus fucking christ */}
      <CardBody className="bg-auth-decorator bg-contain bg-no-repeat bg-center" style={ { backgroundColor: '#fff8e1' } }>
          <CardAuth>
            <Button>google authentication here</Button>
          </CardAuth>
      </CardBody>
    </ContentWrapper>
    </>
  );
}

export default Login;
