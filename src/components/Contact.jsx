import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const earthContainerRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [earthVisible, setEarthVisible] = useState(false);
  const [lastVisible, setLastVisible] = useState(false);

  // IntersectionObserver를 사용하여 지구본이 보이는지 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isNowVisible = entry.isIntersecting;

        // 가시성 상태 변경 감지
        if (isNowVisible !== lastVisible) {
          setLastVisible(isNowVisible);

          // 약간의 지연을 두고 상태 업데이트 (깜박임 방지)
          if (isNowVisible) {
            setEarthVisible(true);
          } else {
            // 화면에서 벗어난 경우 지연 후 언마운트
            setTimeout(() => {
              setEarthVisible(false);
            }, 300);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (earthContainerRef.current) {
      observer.observe(earthContainerRef.current);
    }

    return () => {
      if (earthContainerRef.current) {
        observer.unobserve(earthContainerRef.current);
      }
      observer.disconnect();
      setEarthVisible(false); // 컴포넌트 언마운트 시 지구본도 언마운트
    };
  }, [lastVisible]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_xeua5ss",
        "template_zpa4jpo",
        {
          from_name: form.name,
          to_name: "Gyugod93",
          from_email: form.email,
          to_email: "gyu4016@gmail.com",
          message: form.message,
        },
        "wo9SIYT9ISyvGXVHb"
      )
      .then(
        () => {
          setLoading(false);
          alert("성공적으로 전송되었습니다. 감사합니다.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("문제가 발생했습니다. 금방 조치하겠습니다.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>저에게 연락하고 싶으신가요?</p>
        <h3 className={styles.sectionHeadText}>언제든지 연락주세요!</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              이름을 알려주세요!
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="당신의 이름은 무엇인가요?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              이메일을을 알려주세요!
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="당신의 이메일은 무엇인가요?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              어떤말을 하고싶으신가요?
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="제게 하고싶은 말을 적어주세요!"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "전송중..." : "전송하기"}
          </button>
        </form>
      </motion.div>

      <motion.div
        ref={earthContainerRef}
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {earthVisible ? (
          <EarthCanvas />
        ) : (
          <div className="w-full h-full bg-tertiary opacity-10 rounded-lg"></div>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
