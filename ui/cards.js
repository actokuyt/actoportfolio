"use client";

import * as React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Button from '@mui/material/Button';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Transition } from "react-transition-group";
import { Newsreader } from "next/font/google";
import { CardActionArea, Typography } from "@mui/material";
import { certs, webDevProjects, cvProjects, blogArticles } from "../data/data";

const newsreader = Newsreader({
  subsets: ["latin"],
});

export function CertificationsCard() {
  const [open, setOpen] = React.useState(false);
  const [modalTriggerId, setModalTriggerId] = React.useState("");

  function handleModalTrigger(triggerId) {
    setModalTriggerId(triggerId);
    setOpen(true);
  }

  function handleModalClose() {
    setModalTriggerId("");
    setOpen(false);
  }

  function age(date) {
    let givenDateString = date;

    let givenDate = new Date(givenDateString);
    let currentDate = new Date();

    let timeDifference = currentDate.getTime() - givenDate.getTime();

    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);
    months %= 12;

    let age = `${months} ${months > 1 ? "months" : "month"} ${
      years > 0 ? `${years} ${years > 1 ? "years" : "year"}` : ""
    }`;

    return age;
  }
  return (
    <div>
      {certs.map((cert) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={cert.title} className="mb-4">
            <CardActionArea onClick={() => handleModalTrigger(cert.title)}>
              <CardMedia
                component="img"
                alt={cert.title}
                height="140"
                image={cert.img}
              />
              <CardContent>
                <h1 className="text-xl mt-2 pl-4">{cert.title}</h1>
                <h4 className="text-sm pl-4">{`${age(
                  cert.date
                )} of Experience`}</h4>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={handleModalClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          {certs.map((cert) => {
            if (cert.title == modalTriggerId) {
              return <img key={cert.title} src={cert.img} alt={cert.title} />;
            }
          })}
        </Sheet>
      </Modal>
    </div>
  );
}

export function WebDevProjectsCard() {
  const [open, setOpen] = React.useState(false);
  const [modalTriggerId, setModalTriggerId] = React.useState("");

  const duration = 500;

  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: `translateY(80%)`,
  };

  const transitionStyles = {
    entering: { transform: `translateY(80%)` },
    entered: { transform: `translateY(0%)` },
    exiting: { transform: `translateY(0%)` },
    exited: { transform: `translateY(80%)` },
  };

  const nodeRef = React.useRef(null);

  function handleModalTrigger(triggerId) {
    setModalTriggerId(triggerId);
    setOpen(true);
  }

  function handleModalClose() {
    setModalTriggerId("");
    setOpen(false);
  }

  return (
    <div className={newsreader.className}>
      {webDevProjects.map((project) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={project.title} className="mb-4">
            <CardActionArea onClick={() => handleModalTrigger(project.title)}>
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.img}
              />
              <CardContent>
                <h1 className="text-xl mt-2 pl-4">{project.title}</h1>
                <h4 className="text-sm mt-2 pl-4">{`${project.startDate} - ${
                  project.endDate ? `${project.endDate}` : "Present"
                }`}</h4>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
      <Transition nodeRef={nodeRef} in={open} timeout={duration}>
        {(state) => (
          <Modal
            open={!["exited", "exiting"].includes(state)}
            onClose={handleModalClose}
            ref={nodeRef}
            slotProps={{
              backdrop: {
                sx: {
                  display: `none`,
                },
              },
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Sheet
              variant="outlined"
              sx={{
                maxWidth: 500,
                borderRadius: "md",
                p: 3,
                boxShadow: "lg",
                overflow: "scroll",
              }}
              className="h-[95vh] w-[98%] mx-auto bg-blue-100 mt-24"
            >
              <ModalClose
                component={ArrowBackIcon}
                variant="plain"
                sx={{ m: 1 }}
                className="sticky left-[10px] mx-[5px] my-[10px] p-[5px]"
              />
              {webDevProjects.map((project) => {
                if (project.title == modalTriggerId) {
                  return (
                    <div key={project.title} className="mx-2 pb-[40px]">
                      <Card className="w-[100%] mx-auto" >
                        <CardMedia
                          component="img"
                          alt={project.title}
                          height="140"
                          image={project.img}
                        />
                        <CardContent className="mx-2 mb-2" >
                        <h1 className="text-xl mt-2 ">{project.title}</h1>
                        <h4 className="text-sm mt-2 ">{`${
                          project.startDate
                        } - ${
                          project.endDate ? `${project.endDate}` : "Present"
                        }`}</h4>
                        </CardContent>
                        <CardActions>
                          <Button component={Link} href={project.demo} size="small">Demo</Button>
                          <Button component={Link} href={project.repo} size="small">Source</Button>
                        </CardActions>
                      </Card>
                      <h1 className="text-center text-l font-semibold mt-4" >Tech Stack</h1>
                      <ul className="flex flex-wrap " >
                        {project.stack.map((tech)=>{
                          return <li key={tech} className="mr-2" >{tech}</li>
                        })}
                      </ul>
                      <p className="mt-4" >{project.desc}</p>
                    </div>
                  );
                }
              })}
            </Sheet>
          </Modal>
        )}
      </Transition>
    </div>
  );
}

export function CvProjectsCard() {
  const [open, setOpen] = React.useState(false);
  const [modalTriggerId, setModalTriggerId] = React.useState("");

  const duration = 500;

  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: `translateY(80%)`,
  };

  const transitionStyles = {
    entering: { transform: `translateY(80%)` },
    entered: { transform: `translateY(0%)` },
    exiting: { transform: `translateY(0%)` },
    exited: { transform: `translateY(80%)` },
  };

  const nodeRef = React.useRef(null);
  
  function handleModalTrigger(triggerId) {
    setModalTriggerId(triggerId);
    setOpen(true);
  }

  function handleModalClose() {
    setModalTriggerId("");
    setOpen(false);
  }

  return (
    <div className={newsreader.className}>
      {cvProjects.map((project) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={project.title} className="mb-4">
            <CardActionArea onClick={() => handleModalTrigger(project.title)}>
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.img}
              />
              <CardContent>
                <h1 className="text-xl mt-2 pl-4">{project.title}</h1>
                <h4 className="text-sm mt-2 pl-4">{`${project.startDate} - ${
                  project.endDate ? `${project.endDate}` : "Present"
                }`}</h4>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
      <Transition nodeRef={nodeRef} in={open} timeout={duration}>
        {(state) => (
            <Modal
              open={!["exited", "exiting"].includes(state)}
              onClose={handleModalClose}
              ref={nodeRef}
              slotProps={{
                backdrop: {
                  sx: {
                    display: `none`,
                  },
                },
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  maxWidth: 500,
                  borderRadius: "md",
                  p: 3,
                  boxShadow: "lg",
                  overflow: "scroll",
                }}
                className="h-[95vh] w-[98%] mx-auto bg-blue-100 mt-24"
              >
                <ModalClose
                  component={ArrowBackIcon}
                  variant="plain"
                  sx={{ m: 1 }}
                  className="sticky left-[10px] mx-[5px] my-[10px] p-[5px]"
                />
                {cvProjects.map((project) => {
                  if (project.title == modalTriggerId) {
                    return (
                      <div key={project.title} className="mx-2 pb-[40px]">
                      <Card className="w-[100%] mx-auto" >
                        <CardMedia
                          component="img"
                          alt={project.title}
                          height="140"
                          image={project.img}
                        />
                        <CardContent className="mx-2 mb-2" >
                        <h1 className="text-xl mt-2 ">{project.title}</h1>
                        <h4 className="text-sm mt-2 ">{`${
                          project.startDate
                        } - ${
                          project.endDate ? `${project.endDate}` : "Present"
                        }`}</h4>
                        </CardContent>
                        <CardActions>
                          <Button component={Link} href={project.demo} size="small">Demo</Button>
                          <Button component={Link} href={project.repo} size="small">Source</Button>
                        </CardActions>
                      </Card>
                      <h1 className="text-center text-l font-semibold mt-4" >Tech Stack</h1>
                      <ul className="flex flex-wrap " >
                        {project.stack.map((tech)=>{
                          return <li key={tech} className="mr-2" >{tech}</li>
                        })}
                      </ul>
                      <p className="mt-4" >{project.desc}</p>
                    </div>
                    );
                  }
                })}
              </Sheet>
            </Modal>
        )}
      </Transition>
    </div>
  );
}

export function BlogArticlesCard() {
  return (
    <div>
      {blogArticles.map((article) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={article.title} className="mb-4">
            <CardActionArea
              component={Link}
              href="https://medium.com/@chibthankgod/the-oasis-infobyte-intern-experience-084a6271ee2c"
            >
              <CardMedia
                component="img"
                alt={article.title}
                height="140"
                image={article.img}
              />
              <CardContent>
                <h1 className="text-xl mt-2 pl-4">{article.title}</h1>
                <h4 className="text-sm pl-4">{article.date}</h4>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}
