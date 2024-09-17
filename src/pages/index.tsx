import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Button,
  Link,
} from "@nextui-org/react";

import ConfettiExplosion from "@/components/ConfettiExplosion";

export default function IndexPage() {
  // Define an array of pages
  const pages = ["invite", "info", "osa"];
  // Keep track of the current page using an index
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  // Function to handle navigation
  const handleNavigation = (direction: "next" | "previous") => {
    if (direction === "next" && currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else if (direction === "previous" && currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  // Get the current page based on the index
  const currentPage = pages[currentPageIndex];

  return (
    <div
      className="flex flex-col items-center justify-center relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: 'url("/images/Uppsala_University_2023.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ConfettiExplosion numberOfPieces={150} />

      {currentPage === "invite" && (
        <Card className="max-w-[400px] min-h-[450px] py-6 px-2 mx-4">
          <CardHeader className="flex flex-col gap-4 text-center">
            <h1 className="text-3xl font-bold font-playwriteCU">
              Du är inbjuden!
            </h1>
            <h2 className="text-md font-playwriteCU text-default-500">
              Uppsala Universitet
            </h2>
          </CardHeader>
          <Divider />
          <CardBody className="text-center gap-4 lg:px-10 sm:px-4">
            <p>Kära vänner och familj,</p>
            <p>
              Det är med stor glädje som jag bjuder in er till att fira min
              examen från Uppsala Universitet.
            </p>
            <p>
              Examenscermonin håller rum vid Universitetshuset i Uppsala, där
              det kommer bjudas på fartfylld underhållning och tal.
            </p>
          </CardBody>
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Manual navigation buttons */}
            <Button
              color="primary"
              disabled={currentPageIndex === 0} // Disable if on the first page
              size="sm"
              variant="shadow"
              onClick={() => handleNavigation("previous")}
            >
              Tillbaka
            </Button>
            <Button
              color="primary"
              disabled={currentPageIndex === pages.length - 1} // Disable if on the last page
              size="sm"
              variant="shadow"
              onClick={() => handleNavigation("next")}
            >
              Nästa
            </Button>
          </div>
        </Card>
      )}

      {currentPage === "info" && (
        <Card className="max-w-[400px] min-h-[450px] py-6 px-2 mx-4 ease-in">
          <CardHeader className="flex flex-col gap-4 text-center">
            <h1 className="text-3xl font-bold font-playwriteCU mb-5">
              Tid och plats
            </h1>
          </CardHeader>
          <Divider />
          <CardBody className="gap-4 lg:px-10 sm:px-4 mt-5">
            <p>
              <strong>Tid: </strong>Cermonin startar 15.30, med insläpp till
              aulan från 15.00, och varar i ca 1,5 h
            </p>
            <p>Kom därför gärna tidigare, förslagsvis mellan 14.00-14.30!</p>
            <p>
              <strong>Datum: </strong>5/10
            </p>
            <p>
              <strong>Adress: </strong>Uppsala Universitetshus,
              <Link
                isExternal
                showAnchorIcon
                color="secondary"
                href="https://maps.app.goo.gl/UGQEkUww7ZuhBfkn9"
              >
                Biskopsgatan 3, 753 10
              </Link>
            </p>
          </CardBody>
          <div className="flex items-center justify-between mt-4 px-2">
            <Button
              color="primary"
              disabled={currentPageIndex === 0}
              size="sm"
              variant="shadow"
              onClick={() => handleNavigation("previous")}
            >
              Tillbaka
            </Button>
            <Button
              color="primary"
              disabled={currentPageIndex === pages.length - 1}
              size="sm"
              variant="shadow"
              onClick={() => handleNavigation("next")}
            >
              Nästa
            </Button>
          </div>
        </Card>
      )}

      {currentPage === "osa" && (
        <Card className="max-w-[400px] min-h-[450px] py-6 px-2 mx-4">
          <CardHeader className="flex flex-col mb-5 text-center ">
            <h1 className="text-3xl font-bold font-playwriteCU">
              Efter cermonin
            </h1>
          </CardHeader>
          <Divider />
          <CardBody className="text-center gap-4 lg:px-10 sm:px-4">
            <p>
              Efter cermonin har jag planerat, för oss som vill, att äta middag
              på restaurang Tjuren i närheten.
            </p>
            <p>
              För att boka i god tid ber jag er därför att OSA så snart ni kan,
              dock senast den 29:e sep!
            </p>
            <Button color="secondary" size="md" variant="shadow">
              <Link
                isExternal
                showAnchorIcon
                className="text-white"
                href="https://forms.gle/t7YsKgj6TerxeNPJ8"
              >
                OSA
              </Link>
            </Button>
            <p>Ser fram emot att träffa er! -Gabriél</p>
          </CardBody>
          <div className="flex items-center justify-between mt-4 px-2">
            <Button
              color="primary"
              disabled={currentPageIndex === 0}
              size="sm"
              variant="shadow"
              onClick={() => handleNavigation("previous")}
            >
              Tillbaka
            </Button>
            <Button
              color="primary"
              disabled={currentPageIndex === pages.length - 1}
              size="sm"
              variant="shadow"
              onClick={() => handleNavigation("next")}
            >
              Nästa
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
