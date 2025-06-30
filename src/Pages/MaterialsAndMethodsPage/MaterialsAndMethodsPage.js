import React from "react";
import SectionWrapper from "./SectionWrapper";
import InteractiveTabs from "./InteractiveTabs";
import ProcessFlow from "./ProcessFlow";
import BiomassList from "./BiomassList";
import { motion } from "framer-motion";

const biomassSamples = [
  ["Musa acuminata", "'Red Dacca' (Banana)"],
  ["Punica granatum", "(Pomegranate)"],
  ["Citrullus lanatus", "(Watermelon)"],
  ["Aloe barbadensis miller", "(Aloe vera)"],
  ["Mangifera indica", "(Mango)"],
  ["Cucurbita pepo", "(Pumpkin)"],
  ["Roystonea regia", "(Royal Palm)"],
  ["Annona squamosa", "L. (Custard Apple)"],
  ["Ananas comosus", "(Pineapple)"],
  ["Arecaceae", "(Palm)"],
  ["Arachis hypogaea", "(Ground Nut)"],
  ["Eichhornia crassipes", "(Water Hyacinth)"],
  ["Delonix regia", "(Royal Poinciana)"],
  ["Miscanthus", "(Silvergrass)"],
  "Rice straw",
  ["Momordica charantia", "(Bitter Melon)"],
  ["Phaseolus vulgaris", "L. (Beans)"],
  "Cotton gins",
  "Rice husk",
  "Pseudostem",
].map((item, index) =>
  typeof item === "string" ? (
    item
  ) : (
    <span key={index}>
      <em className="italic">{item[0]}</em> {item[1]}
    </span>
  )
);

const pretreatmentTabs = [
  {
    id: "acid",
    label: "Acid Hydrolysis",
    content: (
      <p>
        Primarily removes hemicellulose. While it has low acid consumption, it
        requires higher temperatures, posing challenges like vessel corrosion
        and the formation of fermentation inhibitors.
      </p>
    ),
  },
  {
    id: "alkali",
    label: "Alkali Hydrolysis",
    content: (
      <p>
        Effectively cleaves bonds between lignin and carbohydrates through
        saponification. This process solubilizes lignin and hemicellulose,
        increasing enzyme accessibility to the cellulose.
      </p>
    ),
  },
  {
    id: "ultrasound",
    label: "Ultrasound Assisted",
    content: (
      <p>
        High-frequency acoustic oscillations create oxidizing radicals (H° and
        OH°) that rupture the glycosidic bonds. It's a rapid method with high
        mass transfer efficiency.
      </p>
    ),
  },
  {
    id: "microwave",
    label: "Microwave Assisted",
    content: (
      <p>
        Microwave radiation heats biomass from within, causing the cellulosic
        network to expand and rupture. This method is fast, efficient, and
        releases sugars effectively.
      </p>
    ),
  },
];

const productionSteps = [
  "Lignocellulosic Biomass",
  "Pretreatment",
  "Enzymatic Hydrolysis",
  "Fermentation",
  "Distillation",
  "Bioethanol",
];

const MaterialsAndMethodsPage = () => (
  <div className="bg-transparent min-h-screen text-white font-sans pt-32">
    <main className="max-w-5xl mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-400"
      >
        Materials & Methods
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-lg md:text-xl text-center text-gray-400 mb-24"
      >
        An interactive journey through the science of bioethanol production.
      </motion.p>

      <SectionWrapper title="Biomass Collection" id="biomass">
        <p>
          A diverse range of lignocellulosic biomass was sourced from local
          vendors and the Prathyusha Engineering College campus grounds. All
          samples were meticulously washed, sun-dried for 20 days to reduce
          moisture content, and then pulverized into a fine, consistent powder
          to maximize surface area for subsequent reactions.
        </p>
        <h3 className="text-2xl font-semibold text-teal-200 mt-8 mb-4">
          Biomass Samples Analyzed:
        </h3>
        <BiomassList items={biomassSamples} />
      </SectionWrapper>

      <SectionWrapper title="Nanoparticle Synthesis" id="nanoparticles">
        <p>
          Iron (Fe) nanoparticles were synthesized via a green chemistry
          approach, utilizing{" "}
          <em className="italic font-semibold text-yellow-300">
            Musa acuminata
          </em>{" "}
          (banana) peel extract as a natural reducing and capping agent. A 1 mM
          ferric nitrate solution was treated with the extract and gently
          heated, resulting in a brownish-black precipitate of Fe nanoparticles,
          which were isolated by centrifugation and washing.
        </p>
      </SectionWrapper>

      <SectionWrapper title="Lignocellulose Pretreatment" id="pretreatment">
        <p>
          Pretreatment is a critical step to deconstruct the resilient
          lignocellulosic matrix, making cellulose more accessible for enzymatic
          breakdown. We explored several state-of-the-art methods, each with
          unique mechanisms and efficiencies.
        </p>
        <div className="mt-8">
          <InteractiveTabs tabsData={pretreatmentTabs} />
        </div>
      </SectionWrapper>

      <SectionWrapper title="Overall Production Flow" id="flow">
        <p>
          The end-to-end process, from raw plant matter to purified bioethanol,
          follows a systematic and optimized workflow designed for maximum yield
          and efficiency.
        </p>
        <ProcessFlow steps={productionSteps} />
      </SectionWrapper>

      <SectionWrapper title="Predictive Modeling" id="ml">
        <p>
          To accelerate research and predict outcomes, we developed supervised
          machine learning models. These models were trained on experimental
          data to forecast lignocellulosic composition and final bioethanol
          yield based on biomass type and pretreatment parameters. Algorithms
          tested include Multiple Linear Regression, Decision Trees, Random
          Forest, and LightGBM, with model performance validated through
          cross-validation and R-squared metrics.
        </p>
      </SectionWrapper>
    </main>
  </div>
);

export default MaterialsAndMethodsPage;
