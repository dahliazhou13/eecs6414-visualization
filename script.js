Highcharts.chart('container', {
  chart: {
      type: 'packedbubble',
      height: '100%'
  },
  title: {
      text: 'The number of comments per tag and their negativity',
      align: 'left'
  },
  tooltip: {
      useHTML: true,
      pointFormat: '<b>{point.name}:</b> {point.value} comments'
  },
  plotOptions: {
      packedbubble: {
          minSize: '30%',
          maxSize: '120%',
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                  property: 'y',
                  operator: '>',
                  value: 250
              },
              style: {
                  color: 'black',
                  textOutline: 'none',
                  fontWeight: 'normal'
              }
          }
      }
  },
  series: [{
      name: '0-5% Negative',
      data: [
        { name: "data-stream-mining", value: 42 },
        { name: "nosql", value: 65 },
        { name: "map-reduce", value: 59 },
        { name: "mongodb", value: 52 },
        { name: "sports", value: 12 },
        { name: "hierarchical-data-format", value: 61 },
        { name: "usecase", value: 17 },
        { name: "anonymization", value: 41 },
        { name: "consumerweb", value: 8 },
        { name: "hbase", value: 9 },
        { name: "scipy", value: 209 },
        { name: "object-recognition", value: 129 },
        { name: "hog", value: 2 },
        { name: "roc", value: 139 },
        { name: "apache-pig", value: 8 },
        { name: "finance", value: 140 },
        { name: "simulation", value: 82 },
        { name: "aggregation", value: 66 },
        { name: "ngrams", value: 48 },
        { name: "fuzzy-logic", value: 47 },
        { name: "markov", value: 12 },
        { name: "apache-kafka", value: 6 },
        { name: "pybrain", value: 7 },
        { name: "bayesian-networks", value: 82 },
        { name: "information-theory", value: 74 },
        { name: "gini-index", value: 14 },
        { name: "entropy", value: 16 },
        { name: "seaborn", value: 146 },
        { name: "discriminant-analysis", value: 26 },
        { name: "google-prediction-api", value: 8 },
        { name: "stata", value: 19 },
        { name: "domain-adaptation", value: 24 },
        { name: "competitions", value: 12 },
        { name: "spss", value: 7 },
        { name: "market-basket-analysis", value: 47 },
        { name: "graphical-model", value: 36 },
        { name: "jaccard-coefficient", value: 15 },
        { name: "noisification", value: 7 },
        { name: "vc-theory", value: 49 },
        { name: "monte-carlo", value: 65 },
        { name: "text-generation", value: 151 },
        { name: "learning-rate", value: 79 },
        { name: "word", value: 37 },
        { name: "convergence", value: 93 },
        { name: "cart", value: 47 },
        { name: "tranformation", value: 6 },
        { name: "esl", value: 23 },
        { name: "kernel", value: 136 },
        { name: "object-detection", value: 501 },
        { name: "normal-equation", value: 35 },
        { name: "objective-function", value: 32 },
        { name: "annotation", value: 42 },
        { name: "difference", value: 28 },
        { name: "dplyr", value: 24 },
        { name: "self-driving", value: 26 },
        { name: "glorot-initialization", value: 5 },
        { name: "knime", value: 8 },
        { name: "project-planning", value: 28 },
        { name: "graphviz", value: 20 },
        { name: "activity-recognition", value: 12 },
        { name: "mcmc", value: 2 },
        { name: "cs231n", value: 2 },
        { name: "gmm", value: 15 },
        { name: "3d-reconstruction", value: 21 },
        { name: "structured-data", value: 21 },
        { name: "fastai", value: 25 },
        { name: "gaussian-process", value: 32 },
        { name: "rbf", value: 9 },
        { name: "feature-map", value: 27 },
        { name: "image-size", value: 4 },
        { name: "manhattan", value: 15 },
        { name: "sensors", value: 25 },
        { name: "wikipedia", value: 13 },
        { name: "siamese-networks", value: 41 },
        { name: "least-squares-svm", value: 6 },
        { name: "spyder", value: 6 },
        { name: "linearly-separable", value: 20 },
        { name: "gpt", value: 164 },
        { name: "sparse", value: 43 },
        { name: "spearmans-rank-correlation", value: 21 },
        { name: "bootstraping", value: 16 },
        { name: "confidence", value: 51 },
        { name: "movielens", value: 5 },
        { name: "functional-api", value: 2 },
        { name: "anova", value: 24 },
        { name: "spectral-clustering", value: 27 },
        { name: "natural-gradient-boosting", value: 34 },
        { name: "bag-of-words", value: 46 },
        { name: "density-estimation", value: 17 },
        { name: "api", value: 24 },
        { name: "permutation-test", value: 2 },
        { name: "knowledge-graph", value: 26 },
        { name: "poisson", value: 15 },
        { name: "mean", value: 21 },
        { name: "early-stopping", value: 23 },
        { name: "3d-object-detection", value: 12 },
        { name: "ndcg", value: 3 },
        { name: "document-understanding", value: 16 },
        { name: "time-complexity", value: 12 },
        { name: "estimation", value: 6 },
        { name: "logarithmic", value: 35 },
        { name: "google-bigquery", value: 3 },
        { name: "sigmoid", value: 25 },
        { name: "tensorboard", value: 2 },
        { name: "best-practice", value: 5 },
        { name: "feature-interaction", value: 5 },
        { name: "one-class-classification", value: 7 },
        { name: "real-ml-usecase", value: 14 },
        { name: "reward", value: 5 },
        { name: "agglomerative", value: 1 },
        { name: "logistic", value: 22 },
        { name: "hashing", value: 10 },
        { name: "conda", value: 8 },
        { name: "data-drift", value: 13 },
        { name: "z-test", value: 2 },
        { name: "elastic-search", value: 9 },
        { name: "cause-and-effect", value: 4 },
        { name: "odds", value: 5 },
        { name: "pacf", value: 1 },
        { name: "symbolic-learning", value: 3 },
        { name: "universal-approximation-theorem", value: 4 },
        { name: "dictionary", value: 4 },
        { name: "duplicate", value: 3 },
        { name: "intuition", value: 2 },
        { name: "fourier", value: 1 },
        { name: "custom-layer", value: 8 },
        { name: "linear-programming", value: 6 },
        { name: "pycaret", value: 7 },
        { name: "pcamixdata", value: 2 },
        { name: "pearsons-coefficient", value: 5 },
        { name: "python-polars", value: 8 },
        { name: "pymc3", value: 5 },
        { name: "t", value: 6 },
        { name: "t5", value: 1 },
        { name: "diffusion", value: 1 },
        { name: "flask", value: 1 },
        { name: "synthetic-feature", value: 2 },
        { name: "coherence", value: 1 },
        { name: "vector-database", value: 11 },
        { name: "llm", value: 23 },
        { name: "prompt-engineering", value: 1 },
        { name: "voice", value: 2 },
        { name: "text-to-speech", value: 2 },
        { name: "clinical", value: 7 },
        { name: "significance", value: 9 },
        { name: "facet-grid", value: 1 },
        { name: "statistical-significance", value: 1 },
        { name: "meta-analysis", value: 1 },
        { name: "yolov8", value: 8 },
        { name: "variational-inference", value: 1 }
      ]
  }, {
      name: '5-10% Negative',
      data: [
        { name: "machine-learning", value: 28381 },
        { name: "databases", value: 292 },
        { name: "data-mining", value: 3018 },
        { name: "categorical-data", value: 963 },
        { name: "scalability", value: 136 },
        { name: "performance", value: 412 },
        { name: "libsvm", value: 21 },
        { name: "statistics", value: 2459 },
        { name: "google", value: 57 },
        { name: "predictive-modeling", value: 3235 },
        { name: "algorithms", value: 1010 },
        { name: "similarity", value: 621 },
        { name: "dimensionality-reduction", value: 698 },
        { name: "apache-hadoop", value: 222 },
        { name: "dataset", value: 3180 },
        { name: "data-indexing-techniques", value: 18 },
        { name: "metadata", value: 52 },
        { name: "parsing", value: 84 },
        { name: "social-network-analysis", value: 214 },
        { name: "time-series", value: 3887 },
        { name: "javascript", value: 87 },
        { name: "visualization", value: 1458 },
        { name: "recommender-system", value: 915 },
        { name: "classification", value: 8514 },
        { name: "nlp", value: 5200 },
        { name: "text-mining", value: 1431 },
        { name: "distributed", value: 108 },
        { name: "machine-translation", value: 135 },
        { name: "parallel", value: 94 },
        { name: "neural-network", value: 11132 },
        { name: "data-formats", value: 89 },
        { name: "reference-request", value: 264 },
        { name: "sentiment-analysis", value: 479 },
        { name: "optimization", value: 1230 },
        { name: "parameter", value: 72 },
        { name: "svm", value: 1265 },
        { name: "feature-selection", value: 2361 },
        { name: "feature-extraction", value: 1027 },
        { name: "beginner", value: 471 },
        { name: "encoding", value: 483 },
        { name: "outlier", value: 638 },
        { name: "graphs", value: 396 },
        { name: "experiments", value: 89 },
        { name: "topic-model", value: 284 },
        { name: "lda", value: 186 },
        { name: "sampling", value: 462 },
        { name: "named-entity-recognition", value: 296 },
        { name: "deep-learning", value: 11058 },
        { name: "hyperparameter", value: 314 },
        { name: "gradient-descent", value: 1083 },
        { name: "geospatial", value: 182 },
        { name: "pyspark", value: 224 },
        { name: "correlation", value: 1013 },
        { name: "genetic", value: 17 },
        { name: "rbm", value: 80 },
        { name: "information-retrieval", value: 284 },
        { name: "online-learning", value: 121 },
        { name: "marketing", value: 57 },
        { name: "language-model", value: 221 },
        { name: "forecast", value: 206 },
        { name: "windows", value: 33 },
        { name: "matlab", value: 406 },
        { name: "anomaly-detection", value: 933 },
        { name: "self-study", value: 140 },
        { name: "sequence", value: 257 },
        { name: "neo4j", value: 26 },
        { name: "naive-bayes-classifier", value: 392 },
        { name: "computer-vision", value: 1014 },
        { name: "tableau", value: 81 },
        { name: "methods", value: 44 },
        { name: "scoring", value: 144 },
        { name: "ranking", value: 214 },
        { name: "classifier", value: 167 },
        { name: "decision-trees", value: 1903 },
        { name: "supervised-learning", value: 996 },
        { name: "image-classification", value: 1561 },
        { name: "markov-process", value: 150 },
        { name: "convolutional-neural-network", value: 1634 },
        { name: "books", value: 88 },
        { name: "normalization", value: 688 },
        { name: "multiclass-classification", value: 1427 },
        { name: "genetic-algorithms", value: 129 },
        { name: "featurization", value: 39 },
        { name: "ensemble-modeling", value: 405 },
        { name: "distance", value: 383 },
        { name: "convolution", value: 575 },
        { name: "data", value: 1814 },
        { name: "orange", value: 272 },
        { name: "word-embeddings", value: 893 },
        { name: "word2vec", value: 627 },
        { name: "churn", value: 117 },
        { name: "preprocessing", value: 1118 },
        { name: "rnn", value: 1483 },
        { name: "feature-construction", value: 212 },
        { name: "descriptive-statistics", value: 189 },
        { name: "weka", value: 107 },
        { name: "multilabel-classification", value: 737 },
        { name: "unsupervised-learning", value: 1119 },
        { name: "probability", value: 644 },
        { name: "image-recognition", value: 526 },
        { name: "model-evaluations", value: 722 },
        { name: "data-product", value: 40 },
        { name: "gensim", value: 191 },
        { name: "backpropagation", value: 667 },
        { name: "feature-engineering", value: 1573 },
        { name: "text", value: 312 },
        { name: "hinge-loss", value: 13 },
        { name: "json", value: 112 },
        { name: "nltk", value: 269 },
        { name: "autoencoder", value: 523 },
        { name: "prediction", value: 1080 },
        { name: "audio-recognition", value: 288 },
        { name: "multitask-learning", value: 55 },
        { name: "dropout", value: 148 },
        { name: "pca", value: 761 },
        { name: "tsne", value: 172 },
        { name: "manifold", value: 12 },
        { name: "inference", value: 55 },
        { name: "randomized-algorithms", value: 50 },
        { name: "regularization", value: 317 },
        { name: "sequential-pattern-mining", value: 114 },
        { name: "torch", value: 28 },
        { name: "mutual-information", value: 59 },
        { name: "bayesian", value: 252 },
        { name: "labels", value: 225 },
        { name: "activation-function", value: 447 },
        { name: "hashing-trick", value: 18 },
        { name: "powerbi", value: 38 },
        { name: "distribution", value: 368 },
        { name: "estimators", value: 51 },
        { name: "etl", value: 31 },
        { name: "chatbot", value: 48 },
        { name: "machine-learning-model", value: 1818 },
        { name: "cnn", value: 2999 },
        { name: "cost-function", value: 220 },
        { name: "lstm", value: 2434 },
        { name: "search-engine", value: 60 },
        { name: "auc", value: 152 },
        { name: "pytorch", value: 1178 },
        { name: "plotting", value: 294 },
        { name: "ocr", value: 132 },
        { name: "linear-algebra", value: 186 },
        { name: "similar-documents", value: 162 },
        { name: "amazon-ml", value: 14 },
        { name: "embeddings", value: 260 },
        { name: "labelling", value: 68 },
        { name: "matrix", value: 122 },
        { name: "data-analysis", value: 573 },
        { name: "management", value: 25 },
        { name: "perceptron", value: 186 },
        { name: "automatic-summarization", value: 75 },
        { name: "mathematics", value: 432 },
        { name: "nvidia", value: 35 },
        { name: "anomaly", value: 66 },
        { name: "gru", value: 58 },
        { name: "vector-space-models", value: 55 },
        { name: "softmax", value: 126 },
        { name: "tfidf", value: 235 },
        { name: "hashingvectorizer", value: 14 },
        { name: "dirichlet", value: 16 },
        { name: "cloud", value: 29 },
        { name: "ensemble", value: 72 },
        { name: "data-table", value: 66 },
        { name: "data-science-model", value: 1324 },
        { name: "mini-batch-gradient-descent", value: 122 },
        { name: "learning-to-rank", value: 34 },
        { name: "actor-critic", value: 75 },
        { name: "spacy", value: 133 },
        { name: "transfer-learning", value: 355 },
        { name: "hyperparameter-tuning", value: 612 },
        { name: "yolo", value: 168 },
        { name: "counts", value: 17 },
        { name: "markov-hidden-model", value: 71 },
        { name: "matplotlib", value: 470 },
        { name: "sequence-to-sequence", value: 288 },
        { name: "vgg16", value: 182 },
        { name: "alex-net", value: 28 },
        { name: "colab", value: 129 },
        { name: "attention-mechanism", value: 329 },
        { name: "faster-rcnn", value: 72 },
        { name: "representation", value: 75 },
        { name: "predictor-importance", value: 60 },
        { name: "opencv", value: 201 },
        { name: "hypothesis-testing", value: 120 },
        { name: "epochs", value: 89 },
        { name: "stacked-lstm", value: 27 },
        { name: "feature-reduction", value: 19 },
        { name: "speech-to-text", value: 61 },
        { name: "features", value: 214 },
        { name: "image-segmentation", value: 190 },
        { name: "image-preprocessing", value: 334 },
        { name: "ann", value: 36 },
        { name: "finetuning", value: 73 },
        { name: "genetic-programming", value: 36 },
        { name: "ridge-regression", value: 76 },
        { name: "image", value: 182 },
        { name: "discounted-reward", value: 26 },
        { name: "transformer", value: 838 },
        { name: "bert", value: 716 },
        { name: "heatmap", value: 47 },
        { name: "lightgbm", value: 192 },
        { name: "aws-lambda", value: 15 },
        { name: "serialisation", value: 20 },
        { name: "vae", value: 60 },
        { name: "multi-output", value: 78 },
        { name: "interpretation", value: 153 },
        { name: "explainable-ai", value: 117 },
        { name: "automation", value: 16 },
        { name: "stemming", value: 11 },
        { name: "shap", value: 91 },
        { name: "multivariate-distribution", value: 74 },
        { name: "naive-bayes-algorithim", value: 24 },
        { name: "corpus", value: 51 },
        { name: "semantic-similarity", value: 113 },
        { name: "bayesian-nonparametric", value: 24 },
        { name: "time", value: 62 },
        { name: "pearsons-correlation-coefficient", value: 111 },
        { name: "categorical-encoding", value: 210 },
        { name: "information-extraction", value: 42 },
        { name: "doc2vec", value: 15 },
        { name: "cuda", value: 18 },
        { name: "bagging", value: 28 },
        { name: "target-encoding", value: 44 },
        { name: "pruning", value: 12 },
        { name: "isolation-forest", value: 63 },
        { name: "document-term-matrix", value: 23 },
        { name: "groupby", value: 40 },
        { name: "coursera", value: 15 },
        { name: "loss", value: 77 },
        { name: "concept-drift", value: 18 },
        { name: "sgd", value: 26 },
        { name: "mlops", value: 38 },
        { name: "entity-linking", value: 15 },
        { name: "memory", value: 31 },
        { name: "masking", value: 20 },
        { name: "transformation", value: 95 },
        { name: "exploratory-factor-analysis", value: 13 },
        { name: "feature-importances", value: 64 },
        { name: "functions", value: 14 },
        { name: "gnn", value: 12 },
        { name: "data-quality", value: 13 },
        { name: "precision-recall-curve", value: 16 },
        { name: "xgboost-classifier", value: 13 }
      ]
  }, {
      name: '10-15% Negative',
      data: [
        { name: "education", value: 117 },
        { name: "open-source", value: 65 },
        { name: "clustering", value: 3494 },
        { name: "octave", value: 61 },
        { name: "k-means", value: 1114 },
        { name: "bigdata", value: 1166 },
        { name: "efficiency", value: 148 },
        { name: "definitions", value: 82 },
        { name: "r", value: 3430 },
        { name: "tools", value: 258 },
        { name: "data-cleaning", value: 1647 },
        { name: "processing", value: 38 },
        { name: "search", value: 114 },
        { name: "relational-dbms", value: 14 },
        { name: "python", value: 16102 },
        { name: ".net", value: 34 },
        { name: "pandas", value: 3177 },
        { name: "scikit-learn", value: 5795 },
        { name: "confusion-matrix", value: 429 },
        { name: "accuracy", value: 1216 },
        { name: "knowledge-base", value: 60 },
        { name: "aws", value: 89 },
        { name: "sql", value: 271 },
        { name: "binary", value: 263 },
        { name: "random-forest", value: 2288 },
        { name: "logistic-regression", value: 1771 },
        { name: "julia", value: 27 },
        { name: "crawling", value: 36 },
        { name: "apache-spark", value: 489 },
        { name: "cloud-computing", value: 52 },
        { name: "glm", value: 70 },
        { name: "cross-validation", value: 1719 },
        { name: "kaggle", value: 295 },
        { name: "software-recommendation", value: 114 },
        { name: "semi-supervised-learning", value: 133 },
        { name: "state-of-the-art", value: 28 },
        { name: "career", value: 244 },
        { name: "class-imbalance", value: 1603 },
        { name: "research", value: 119 },
        { name: "ab-test", value: 113 },
        { name: "regression", value: 4059 },
        { name: "error-handling", value: 151 },
        { name: "arima", value: 114 },
        { name: "reinforcement-learning", value: 1421 },
        { name: "scala", value: 100 },
        { name: "csv", value: 255 },
        { name: "gbm", value: 146 },
        { name: "library", value: 70 },
        { name: "java", value: 104 },
        { name: "ipython", value: 149 },
        { name: "apache-mahout", value: 39 },
        { name: "feature-scaling", value: 573 },
        { name: "hive", value: 22 },
        { name: "infographics", value: 16 },
        { name: "c", value: 46 },
        { name: "terminology", value: 277 },
        { name: "excel", value: 181 },
        { name: "scraping", value: 81 },
        { name: "survival-analysis", value: 75 },
        { name: "linear-regression", value: 2059 },
        { name: "bioinformatics", value: 48 },
        { name: "pac-learning", value: 30 },
        { name: "loss-function", value: 1125 },
        { name: "xgboost", value: 1583 },
        { name: "ggplot2", value: 99 },
        { name: "weighted-data", value: 196 },
        { name: "missing-data", value: 443 },
        { name: "cosine-distance", value: 174 },
        { name: "anaconda", value: 139 },
        { name: "numerical", value: 88 },
        { name: "methodology", value: 102 },
        { name: "community", value: 16 },
        { name: "data-wrangling", value: 143 },
        { name: "theano", value: 116 },
        { name: "tensorflow", value: 4467 },
        { name: "finite-precision", value: 8 },
        { name: "data-imputation", value: 279 },
        { name: "model-selection", value: 559 },
        { name: "azure-ml", value: 63 },
        { name: "q-learning", value: 379 },
        { name: "pgm", value: 19 },
        { name: "keras", value: 6337 },
        { name: "parameter-estimation", value: 140 },
        { name: "association-rules", value: 95 },
        { name: "jupyter", value: 348 },
        { name: "batch-normalization", value: 86 },
        { name: "statsmodels", value: 105 },
        { name: "stanford-nlp", value: 93 },
        { name: "training", value: 1561 },
        { name: "gpu", value: 344 },
        { name: "python-3.x", value: 471 },
        { name: "hpc", value: 8 },
        { name: "gaussian", value: 132 },
        { name: "overfitting", value: 1170 },
        { name: "score", value: 108 },
        { name: "dataframe", value: 814 },
        { name: "learning", value: 47 },
        { name: "theory", value: 82 },
        { name: "data-augmentation", value: 215 },
        { name: "inception", value: 94 },
        { name: "redshift", value: 10 },
        { name: "privacy", value: 38 },
        { name: "variance", value: 277 },
        { name: "metric", value: 472 },
        { name: "data-leakage", value: 166 },
        { name: "gan", value: 382 },
        { name: "expectation-maximization", value: 37 },
        { name: "active-learning", value: 48 },
        { name: "forecasting", value: 669 },
        { name: "ai", value: 211 },
        { name: "mnist", value: 175 },
        { name: "boosting", value: 262 },
        { name: "adaboost", value: 36 },
        { name: "generative-models", value: 268 },
        { name: "game", value: 60 },
        { name: "keras-rl", value: 30 },
        { name: "openai-gym", value: 80 },
        { name: "dqn", value: 236 },
        { name: "noise", value: 96 },
        { name: "kalman-filter", value: 9 },
        { name: "grid-search", value: 238 },
        { name: "numpy", value: 776 },
        { name: "reshape", value: 78 },
        { name: "k-nn", value: 484 },
        { name: "text-classification", value: 576 },
        { name: "bias", value: 207 },
        { name: "mlp", value: 294 },
        { name: "implementation", value: 182 },
        { name: "probability-calibration", value: 98 },
        { name: "generalization", value: 114 },
        { name: "ensemble-learning", value: 96 },
        { name: "svr", value: 28 },
        { name: "weight-initialization", value: 128 },
        { name: "one-hot-encoding", value: 349 },
        { name: "dummy-variables", value: 96 },
        { name: "c++", value: 14 },
        { name: "gridsearchcv", value: 236 },
        { name: "tokenization", value: 130 },
        { name: "h2o", value: 21 },
        { name: "probabilistic-programming", value: 17 },
        { name: "policy-gradients", value: 97 },
        { name: "momentum", value: 24 },
        { name: "deepmind", value: 58 },
        { name: "f1score", value: 141 },
        { name: "lasso", value: 103 },
        { name: "evolutionary-algorithms", value: 38 },
        { name: "catboost", value: 27 },
        { name: "multi-instance-learning", value: 21 },
        { name: "inceptionresnetv2", value: 21 },
        { name: "mse", value: 136 },
        { name: "pooling", value: 17 },
        { name: "collinearity", value: 100 },
        { name: "pickle", value: 40 },
        { name: "web-scraping", value: 57 },
        { name: "automl", value: 15 },
        { name: "question-answering", value: 41 },
        { name: "networkx", value: 10 },
        { name: "pattern-recognition", value: 96 },
        { name: "pytorch-geometric", value: 19 },
        { name: "derivation", value: 42 },
        { name: "encoder", value: 43 },
        { name: "causalimpact", value: 14 },
        { name: "rmse", value: 63 },
        { name: "data-engineering", value: 59 },
        { name: "chi-square-test", value: 70 },
        { name: "non-parametric", value: 41 },
        { name: "elastic-net", value: 51 },
        { name: "gradient", value: 28 },
        { name: "fasttext", value: 21 },
        { name: "normal", value: 32 },
        { name: "field-aware-factorization-machines", value: 8 },
        { name: "plotly", value: 28 },
        { name: "graph-neural-network", value: 60 },
        { name: "grammar-inference", value: 14 },
        { name: "semantic-segmentation", value: 47 },
        { name: "validation", value: 104 },
        { name: "dynamic-time-warping", value: 22 },
        { name: "linear-models", value: 75 },
        { name: "gradient-boosting-decision-trees", value: 66 },
        { name: "goodness-of-fit", value: 7 },
        { name: "recurrent-neural-network", value: 52 },
        { name: "binary-classification", value: 272 },
        { name: "allennlp", value: 10 },
        { name: "uncertainty", value: 39 },
        { name: "cross-entropy", value: 29 },
        { name: "t-test", value: 7 },
        { name: "labeling", value: 21 },
        { name: "retraining", value: 10 },
        { name: "feedback-loop", value: 8 },
        { name: "dynamic-batching", value: 7 }
      ]
  }, {
      name: '15-20% Negative',
      data: [
        { name: "education", value: 117 },
        { name: "open-source", value: 65 },
        { name: "clustering", value: 3494 },
        { name: "octave", value: 61 },
        { name: "k-means", value: 1114 },
        { name: "bigdata", value: 1166 },
        { name: "efficiency", value: 148 },
        { name: "definitions", value: 82 },
        { name: "r", value: 3430 },
        { name: "tools", value: 258 },
        { name: "data-cleaning", value: 1647 },
        { name: "processing", value: 38 },
        { name: "search", value: 114 },
        { name: "relational-dbms", value: 14 },
        { name: "python", value: 16102 },
        { name: ".net", value: 34 },
        { name: "pandas", value: 3177 },
        { name: "scikit-learn", value: 5795 },
        { name: "confusion-matrix", value: 429 },
        { name: "accuracy", value: 1216 },
        { name: "knowledge-base", value: 60 },
        { name: "aws", value: 89 },
        { name: "sql", value: 271 },
        { name: "binary", value: 263 },
        { name: "random-forest", value: 2288 },
        { name: "logistic-regression", value: 1771 },
        { name: "julia", value: 27 },
        { name: "crawling", value: 36 },
        { name: "apache-spark", value: 489 },
        { name: "cloud-computing", value: 52 },
        { name: "glm", value: 70 },
        { name: "cross-validation", value: 1719 },
        { name: "kaggle", value: 295 },
        { name: "software-recommendation", value: 114 },
        { name: "semi-supervised-learning", value: 133 },
        { name: "state-of-the-art", value: 28 },
        { name: "career", value: 244 },
        { name: "class-imbalance", value: 1603 },
        { name: "research", value: 119 },
        { name: "ab-test", value: 113 },
        { name: "regression", value: 4059 },
        { name: "error-handling", value: 151 },
        { name: "arima", value: 114 },
        { name: "reinforcement-learning", value: 1421 },
        { name: "scala", value: 100 },
        { name: "csv", value: 255 },
        { name: "gbm", value: 146 },
        { name: "library", value: 70 },
        { name: "java", value: 104 },
        { name: "ipython", value: 149 },
        { name: "apache-mahout", value: 39 },
        { name: "feature-scaling", value: 573 },
        { name: "hive", value: 22 },
        { name: "infographics", value: 16 },
        { name: "c", value: 46 },
        { name: "terminology", value: 277 },
        { name: "excel", value: 181 },
        { name: "scraping", value: 81 },
        { name: "survival-analysis", value: 75 },
        { name: "linear-regression", value: 2059 },
        { name: "bioinformatics", value: 48 },
        { name: "pac-learning", value: 30 },
        { name: "loss-function", value: 1125 },
        { name: "xgboost", value: 1583 },
        { name: "ggplot2", value: 99 },
        { name: "weighted-data", value: 196 },
        { name: "missing-data", value: 443 },
        { name: "cosine-distance", value: 174 },
        { name: "anaconda", value: 139 },
        { name: "numerical", value: 88 },
        { name: "methodology", value: 102 },
        { name: "community", value: 16 },
        { name: "data-wrangling", value: 143 },
        { name: "theano", value: 116 },
        { name: "tensorflow", value: 4467 },
        { name: "finite-precision", value: 8 },
        { name: "data-imputation", value: 279 },
        { name: "model-selection", value: 559 },
        { name: "azure-ml", value: 63 },
        { name: "q-learning", value: 379 },
        { name: "pgm", value: 19 },
        { name: "keras", value: 6337 },
        { name: "parameter-estimation", value: 140 },
        { name: "association-rules", value: 95 },
        { name: "jupyter", value: 348 },
        { name: "batch-normalization", value: 86 },
        { name: "statsmodels", value: 105 },
        { name: "stanford-nlp", value: 93 },
        { name: "training", value: 1561 },
        { name: "gpu", value: 344 },
        { name: "python-3.x", value: 471 },
        { name: "hpc", value: 8 },
        { name: "gaussian", value: 132 },
        { name: "overfitting", value: 1170 },
        { name: "score", value: 108 },
        { name: "dataframe", value: 814 },
        { name: "learning", value: 47 },
        { name: "theory", value: 82 },
        { name: "data-augmentation", value: 215 },
        { name: "inception", value: 94 },
        { name: "redshift", value: 10 },
        { name: "privacy", value: 38 },
        { name: "variance", value: 277 },
        { name: "metric", value: 472 },
        { name: "data-leakage", value: 166 },
        { name: "gan", value: 382 },
        { name: "expectation-maximization", value: 37 },
        { name: "active-learning", value: 48 },
        { name: "forecasting", value: 669 },
        { name: "ai", value: 211 },
        { name: "mnist", value: 175 },
        { name: "boosting", value: 262 },
        { name: "adaboost", value: 36 },
        { name: "generative-models", value: 268 },
        { name: "game", value: 60 },
        { name: "keras-rl", value: 30 },
        { name: "openai-gym", value: 80 },
        { name: "dqn", value: 236 },
        { name: "noise", value: 96 },
        { name: "kalman-filter", value: 9 },
        { name: "grid-search", value: 238 },
        { name: "numpy", value: 776 },
        { name: "reshape", value: 78 },
        { name: "k-nn", value: 484 },
        { name: "text-classification", value: 576 },
        { name: "bias", value: 207 },
        { name: "mlp", value: 294 },
        { name: "implementation", value: 182 },
        { name: "probability-calibration", value: 98 },
        { name: "generalization", value: 114 },
        { name: "ensemble-learning", value: 96 },
        { name: "svr", value: 28 },
        { name: "weight-initialization", value: 128 },
        { name: "one-hot-encoding", value: 349 },
        { name: "dummy-variables", value: 96 },
        { name: "c++", value: 14 },
        { name: "gridsearchcv", value: 236 },
        { name: "tokenization", value: 130 },
        { name: "h2o", value: 21 },
        { name: "probabilistic-programming", value: 17 },
        { name: "policy-gradients", value: 97 },
        { name: "momentum", value: 24 },
        { name: "deepmind", value: 58 },
        { name: "f1score", value: 141 },
        { name: "lasso", value: 103 },
        { name: "evolutionary-algorithms", value: 38 },
        { name: "catboost", value: 27 },
        { name: "multi-instance-learning", value: 21 },
        { name: "inceptionresnetv2", value: 21 },
        { name: "mse", value: 136 },
        { name: "pooling", value: 17 },
        { name: "collinearity", value: 100 },
        { name: "pickle", value: 40 },
        { name: "web-scraping", value: 57 },
        { name: "automl", value: 15 },
        { name: "question-answering", value: 41 },
        { name: "networkx", value: 10 },
        { name: "pattern-recognition", value: 96 },
        { name: "pytorch-geometric", value: 19 },
        { name: "derivation", value: 42 },
        { name: "encoder", value: 43 },
        { name: "causalimpact", value: 14 },
        { name: "rmse", value: 63 },
        { name: "data-engineering", value: 59 },
        { name: "chi-square-test", value: 70 },
        { name: "non-parametric", value: 41 },
        { name: "elastic-net", value: 51 },
        { name: "gradient", value: 28 },
        { name: "fasttext", value: 21 },
        { name: "normal", value: 32 },
        { name: "field-aware-factorization-machines", value: 8 },
        { name: "plotly", value: 28 },
        { name: "graph-neural-network", value: 60 },
        { name: "grammar-inference", value: 14 },
        { name: "semantic-segmentation", value: 47 },
        { name: "validation", value: 104 },
        { name: "dynamic-time-warping", value: 22 },
        { name: "linear-models", value: 75 },
        { name: "gradient-boosting-decision-trees", value: 66 },
        { name: "goodness-of-fit", value: 7 },
        { name: "recurrent-neural-network", value: 52 },
        { name: "binary-classification", value: 272 },
        { name: "allennlp", value: 10 },
        { name: "uncertainty", value: 39 },
        { name: "cross-entropy", value: 29 },
        { name: "t-test", value: 7 },
        { name: "labeling", value: 21 },
        { name: "retraining", value: 10 },
        { name: "feedback-loop", value: 8 },
        { name: "dynamic-batching", value: 7 }
      ]
  }, {
      name: '>= 20% Negative',
      data: [
        { name: "indexing", value: 44 },
        { name: "freebase", value: 9 },
        { name: "sas", value: 25 },
        { name: "rattle", value: 2 },
        { name: "imbalance", value: 31 },
        { name: "homework", value: 36 },
        { name: "bayes-error", value: 19 },
        { name: "tflearn", value: 19 },
        { name: "hardware", value: 45 },
        { name: "r-squared", value: 34 },
        { name: "spatial-transformer", value: 5 },
        { name: "smotenc", value: 25 },
        { name: "dynamic-programming", value: 24 },
        { name: "google-cloud", value: 38 },
        { name: "google-data-studio", value: 2 },
        { name: "mean-shift", value: 9 },
        { name: "fuzzy-classification", value: 23 },
        { name: "tesseract", value: 8 },
        { name: "structural-equation-modelling", value: 5 },
        { name: "lime", value: 8 },
        { name: "sagemaker", value: 25 },
        { name: "context-vector", value: 15 },
        { name: "boruta", value: 3 },
        { name: "stacking", value: 21 },
        { name: "rfe", value: 15 },
        { name: "sparsity", value: 8 },
        { name: "federated-learning", value: 12 },
        { name: "adversarial-ml", value: 5 },
        { name: "oversampling", value: 42 },
        { name: "torchvision", value: 4 },
        { name: "ethical-ai", value: 21 },
        { name: "text-processing", value: 4 },
        { name: "tpu", value: 9 },
        { name: "zero-shot-learning", value: 3 },
        { name: "few-shot-learning", value: 2 },
        { name: "prophet", value: 5 },
        { name: "conformalprediction", value: 11 },
        { name: "replication", value: 2 },
        { name: "umap", value: 5 },
        { name: "knowledge-distillation", value: 4 },
        { name: "chatgpt", value: 22 },
        { name: "analysis", value: 4 },
        { name: "validity-coefficient", value: 7 },
        { name: "true-correlation", value: 6 },
        { name: "artificial-intelligence", value: 5 },
        { name: "vscode", value: 3 },
        { name: "date", value: 2 }
      ]
  }]
});
