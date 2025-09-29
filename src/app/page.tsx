"use client";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Dumbbell
} from "lucide-react";
import Link from "next/link";
import { fadeInUp, features, plans, staggerContainer } from "../../siteconfig";



export default function PeriodicGymLanding() {
  return (
    <>
    <Header/>
    <Hero />
    <div className="min-h-screen bg-background mx-auto">
      <section id="features" className="py-20 bg-muted/30">
        <div className="px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Tudo que você precisa para evoluir
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-muted-foreground"
            >
              Funcionalidades pensadas para maximizar seus resultados na
              academia
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-0 shadow-[0px_6px_12px_2px_rgba(0,_0,_0,_0.1)] h-full">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="pt-2 text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Planos para todos os perfis
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Escolha o plano ideal para seus objetivos
            </p>
          </div>

          <div className="gridm gap-8 max-w-lg mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-primary" : ""} shadow-[0px_6px_12px_2px_rgba(0,_0,_0,_0.1)]`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full border-2 border-primary text-primary"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/">
                      {plan.name === "Gratuito"
                        ? "Começar Grátis"
                        : "Assinar Agora"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url(/BannerFooter.svg)] bg-no-repeat bg-cover text-white">
          <div className="mx-auto p-16 text-center">
            <h2 className="text-3xl  font-bold tracking-tight sm:text-4xl">
              Pronto para transformar seus treinos?
            </h2>
            <p className="mt-4 text-lg ">
              Junte-se a milhares de pessoas que já estão vendo resultados reais
            </p>
            <div className="mt-10 mx-auto">
              <Button size="lg" asChild>
                <Link href="/login">
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Dumbbell className="h-4 w-4" />
                </div>
                <span className="text-xl font-bold">PeriodicGym</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A plataforma mais completa para acompanhar sua evolução na
                academia.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Preços
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 FitTracker. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div></>
  );
}
