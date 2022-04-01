/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const vegetables = [
  {
    name: 'carrots',
    image: '/louis-hansel-Iu3oWcTi0a4-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 41,
      'Total Fat': '0.2 g',
      Potassium: '320 mg',
      Cholesterol: '0 mg',
      Sodium: '69 mg',
      'Total Carbohydrate': '10 g',
      Protein: '0.9 g',
    },
  },
  {
    name: 'potatoes',
    image: '/lars-blankers-B0s3Xndk6tw-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 77,
      'Total Fat': '0.1 g',
      Potassium: '421 mg',
      Cholesterol: '0 mg',
      Sodium: '6 mg',
      'Total Carbohydrate': '17 g',
      Protein: '2 g',
    },
  },
  {
    name: 'tomatoes',
    image: '/josephine-baran-g4wzhY8qiMw-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 18,
      'Total Fat': '0.2 g',
      Cholesterol: '0 mg',
      Sodium: '5 mg',
      Potassium: '237 mg',
      'Total Carbohydrate': '3.9 g',
      Protein: '0.9 g',
    },
  },
  {
    name: 'onions',
    image: '/mayu-ken-CNZ-9s5p2i8-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 40,
      'Total Fat': '0.1 g',
      Cholesterol: '0 mg',
      Sodium: '4 mg',
      Potassium: '146 mg',
      'Total Carbohydrate': '9 g',
      Protein: '1.1 g',
    },
  },
  {
    name: 'lettuce',
    image: '/petr-magera-YLeRHRiRgts-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 15,
      'Total Fat': '0.2 g',
      Cholesterol: '0 mg',
      Sodium: '28 mg',
      Potassium: '194 mg',
      'Total Carbohydrate': '2.9 g',
      Protein: '1.4 g',
    },
  },
  {
    name: 'broccoli',
    image: '/louis-hansel-LpHYbY6Qu_o-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 39,
      'Total Fat': '0.07 g',
      Sodium: '36 mg',
      Potassium: '303 mg',
      'Total Carbohydrate': '3.8 g',
      Protein: '2.57 g',
    },
  },
  {
    name: 'corn',
    image: '/wouter-supardi-salari-HE_MjmWh9eQ-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 86,
      'Total Fat': '1.2 g',
      Cholesterol: '0 mg',
      Sodium: '15 mg',
      Potassium: '270 mg',
      'Total Carbohydrate': '19 g',
      Protein: '3.2 g',
    },
  },
]

export default function handler(req, res) {
  res.status(200).json({ items: vegetables })
}

export { vegetables }
