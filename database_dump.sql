--
-- PostgreSQL database dump
--

-- Dumped from database version 13.9 (Ubuntu 13.9-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.7 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.links (
    id integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "userId" integer,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: tokens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tokens (
    id integer NOT NULL,
    "userId" integer,
    token text NOT NULL
);


--
-- Name: tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: tokens id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.links VALUES (2, 'nvuVOKbaf8fF2N6yhuNuO', 'https://www.google.com/?client=safari', 0, NULL, '2023-05-21 18:55:32.88533');
INSERT INTO public.links VALUES (3, '0oNII-nTwdbHbFbkFfDGm', 'https://www.google.com', 0, NULL, '2023-05-21 20:33:18.133066');
INSERT INTO public.links VALUES (4, 'cfnNpsZ3AJm1bb7_FUXFf', 'https://www.google.com', 0, NULL, '2023-05-21 20:56:18.12886');
INSERT INTO public.links VALUES (1, 'WAxbXcnEf1lpBCcZSfBLA', 'https://www.google.com/?client=safari', 1, NULL, '2023-05-21 18:50:33.720055');
INSERT INTO public.links VALUES (8, '1EqNGqUFMNO2STbAZ3f-6', 'https://web.whatsapp.com', 0, 4, '2023-05-22 10:22:15.081113');
INSERT INTO public.links VALUES (9, 'qwP8uUy9oyVDXmM1EcQvZ', 'https://web.whatsapp.com', 0, 4, '2023-05-22 10:22:20.349059');
INSERT INTO public.links VALUES (7, 'M4vnQVCq9YGplUNFx9l8Q', 'https://www.google.com', 3, 3, '2023-05-21 23:03:18.850334');


--
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tokens VALUES (1, 3, 'epleyVQMaeLaTdURXHw_h');
INSERT INTO public.tokens VALUES (2, 3, 'P7b6F-r60j5C3Thj7hLO2');
INSERT INTO public.tokens VALUES (3, 4, 'kL_xy_ze7e7ugM2VzOXfB');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'julia', 'julia@julia.com', '$2b$10$/bymQd9dCNeDnIEvmeQSP.dhRT2nRSr0v7mM//bJMvkKuyCjEpE9K', '2023-05-21 16:34:00.303383', 3);
INSERT INTO public.users VALUES (4, 'teste123', 'teste@tes.com', '$2b$10$sTdleJ71AMAaWmMAeNniQuUN.Rq5U76lMDel39VpG4f8m/7u2qADO', '2023-05-22 10:21:14.800613', 0);
INSERT INTO public.users VALUES (3, 'joao', 'joao@julia.com', '$2b$10$SBz5XQZJtEYy2U.1i6As4uUWAYx2XinK2Fn.CY57ifZ9JYqDZvJUe', '2023-05-21 17:02:22.226733', 3);


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.links_id_seq', 9, true);


--
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tokens_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: links links_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: tokens tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);


--
-- Name: tokens tokens_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_token_key UNIQUE (token);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: links links_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: tokens tokens_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT "tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

