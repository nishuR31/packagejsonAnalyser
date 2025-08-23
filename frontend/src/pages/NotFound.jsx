import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Icon from "../components/AppIcon";
// import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  let [time, setTime] = useState(10);
  useEffect(() => {
    let interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  useEffect(() => {
    let redir = setTimeout(() => {
      // navigate("/");
      return () => {
        clearTimeout(redir);
      };
    }, 10000);
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <h1 className="font-bold text-9xl text-primary opacity-20 animate-pulse">
              404
            </h1>
          </div>
        </div>

        <h2 className="b-2 text-3xl font-medium text-foreground">
          Page Not Found
        </h2>
        <p className="mb-8 text-foreground/70">
          The page you're looking for doesn't exist. Let's get you back!
        </p>
        <p className="mb-8 text-foreground/70">
          You can manually click buttons below else you will be automatically
          redirected to home page in {time}s
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            variant="primary"
            icon={<Icon name="ArrowLeft" />}
            iconPosition="left"
            onClick={() => window.history?.back()}
          >
            Go Back
          </Button>

          <Button
            variant="outline"
            icon={<Icon name="Home" />}
            iconPosition="left"
            onClick={handleGoHome}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
