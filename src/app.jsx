/*
  eslint-disable
    max-lines-per-function
 */

import { css } from "./style.js"

import "./styles.css"

/**
  @typedef {import ("react")} React
 */

/**
  `@ptb/style` example.

  @returns {React.ReactElement}
    React component.
 */

export function App () {
  css({
    "$lightGray": "rgba(0,0,0,.2)",
    "$primaryFonts": "SourceSansPro, sans-serif",
    "*,*::after,*::before": {
      "boxSizing": "inherit"
    },
    "body,html": {
      "bg": "#ddd",
      "boxSizing": "border-box"
    },
    "fontFamily": [
      {
        "fontFamily": "SourceSansPro",
        "fontWeight": 200,
        "src":
          'url("./fonts/SourceSansPro-Light.ttf") format("truetype")'
      },
      {
        "fontFamily": "SourceSansPro",
        "fontWeight": 700,
        "src":
          'url("./fonts/SourceSansPro-Bold.ttf") format("truetype")'
      },
      "sans-serif"
    ]
  })

  return (
    <section
      className={css({
        "&": {
          "bg": "#fff",
          "boxShadow": "0 0 88px $lightGray",
          "height": "100%",
          "maxWidth": 512,
          "mx": "auto",
          "pb": {
            "_": 32,
            "Sm": 16
          }
        }
      })}
    >
      <div
        className={css({
          "&": {
            "backgroundImage":
              'url("https://zippypaws.com/app/uploads/2018/05/strawberry-waffles-1024x668.jpg")',
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "100%",
            "display": "block",
            "height": 0,
            "pt": "64%"
          }
        })}
      />
      <h2
        className={css({
          "&": {
            "borderBottom": "1px solid $lightGray",
            "fontFamily": "$primaryFonts",
            "mx": 32,
            "my": 0,
            "pb": 25,
            "pt": 30,
            "px": 0
          },
          "Sm": {
            "&": {
              "fontSize": 18,
              "mx": 16,
              "textAlign": "center"
            }
          }
        })}
      >
        Strawberry Waffle
      </h2>
      <ul
        className={css({
          "&": {
            "display": "flex",
            "fontFamily": "$primaryFonts",
            "justifyContent": "space-between",
            "listStyleType": "none",
            "mx": 32,
            "my": 0,
            "pb": 16,
            "pl": 0,
            "pt": 24
          },
          "& > li": {
            "& > span": {
              "backgroundRepeat": "no-repeat",
              "backgroundSize": {
                "_": 26,
                "Sm": 24
              },
              "color": "#f48",
              "display": "inline-block",
              "fontWeight": 700,
              "pl": {
                "_": 32,
                "Sm": 28
              },
              "whiteSpace": "nowrap"
            },
            "alignItems": "center",
            "display": "flex",
            "flexDirection": {
              "_": "row",
              "Sm": "column"
            },
            "fontSize": {
              "_": 20,
              "Sm": 18
            }
          },
          "Sm": {
            "&": {
              "flexDirection": "column",
              "mx": 16
            }
          }
        })}
      >
        <li>
          <span
            className={css({
              "backgroundImage":
                "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3e%3ccircle cx='60' cy='60' fill='none' r='50' stroke='black' stroke-width='2'/%3e%3cpath stroke='black' stroke-width='2' d='M60 20v40M60 60l20 20'/%3e%3c/svg%3e\")"
            })}
          >
            20
            {" "}
          </span>{" "}
          Minutes
        </li>
        <li>
          <span
            className={css({
              "backgroundImage":
                "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 120 120'%3e%3cg fill='none' stroke='black' stroke-width='2'%3e%3cpath d='M9 96c0-10 51-10 51 0' id='a'/%3e%3cuse xlink:href='%23a' transform='translate(51)'/%3e%3cuse xlink:href='%23a' transform='translate(0 -64)'/%3e%3cuse xlink:href='%23a' transform='translate(51 -64)'/%3e%3cpath d='M9 32v64M60 32v64M111 32v64'/%3e%3c/g%3e%3c/svg%3e\")"
            })}
          >
            5{" "}
          </span>{" "}
          Ingredients
        </li>
        <li>
          <span
            className={css({
              "backgroundImage":
                "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3e%3cpath d='M16 111h88c0-32-32-15-32-31C112 8 8 8 48 80c0 16-32-1-32 31Z' fill='none' stroke='black' stroke-width='2'/%3e%3c/svg%3e\")"
            })}
          >
            4–6
            {" "}
          </span>{" "}
          Servings
        </li>
      </ul>
      <p
        className={css({
          "&": {
            "fontFamily": "$primaryFonts",
            "mx": {
              "_": 32,
              "Sm": 16
            }
          }
        })}
      >
        There’s no better way to celebrate May being National
        Strawberry Month than by sharing a sweet treat with your pup!
        Strawberries…
      </p>
      <footer
        className={css({
          "&": {
            "display": "flex",
            "justifyContent": "center",
            "px": 32,
            "py": 16
          },
          "px": {
            "Sm": 16
          }
        })}
      >
        <a
          className={css({
            "$animations": {
              "wiggle": {
                "0%": {
                  "transform": "scale3d(1,1,1)"
                },
                "10%,20%": {
                  "transform": "scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)"
                },
                "30%,50%,70%,90%": {
                  "transform":
                    "scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)"
                },
                "40%,60%,80%": {
                  "transform":
                    "scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)"
                },
                "to": {
                  "transform": "scale3d(1,1,1)"
                }
              }
            },
            "$colors": {
              "bg": "#f48",
              "color": "#fff"
            },
            "&": {
              "bg": "$colors.bg",
              "borderRadius": 8,
              "color": "$colors.color",
              "display": "block",
              "fontFamily": "$primaryFonts",
              "fontWeight": 700,
              "margin": "auto",
              "maxWidth": 200,
              "px": 40,
              "py": 10,
              "textAlign": "center",
              "textDecoration": "none"
            },
            "&:hover": {
              "animationDelay": "1s",
              "animationDuration": "1s",
              "animationIterationCount": "infinite",
              "animationName": "$animations.wiggle",
              "boxShadow": "0 10px 32px $colors.bg"
            }
          })}
          href="https://zippypaws.com/dog-friendly-strawberry-waffles/"
        >
          View Recipe
        </a>
      </footer>
    </section>
  )
}
