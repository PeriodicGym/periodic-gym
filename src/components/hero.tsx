import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "../../siteconfig";
import { Button } from "./ui/button";
import Link from "next/link";

const hero = () => {
  return (
          <section className="flex flex-col sm:flex-row items-center justify-between p-10 lg:p-20">
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Transforme seus
            <span className="text-primary"> treinos</span> em
            <span className="text-primary"> resultados</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base md:text-lg leading-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0"
          >
            A plataforma mais completa para acompanhar sua evolução na academia.
            Com IA integrada, análises detalhadas e interface intuitiva.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/login">
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              Grátis para começar
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              Sem cartão de crédito
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              Cancele quando quiser
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full lg:w-1/2 h-80 sm:h-96 lg:h-[500px]">
          <Spline scene="https://prod.spline.design/Ulr8wOnMHuMpsefP/scene.splinecode" />
        </div>
      </section>
  )
}

export default hero
