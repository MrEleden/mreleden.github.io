---
layout: default
title: Projects
---

[← Back to Home](./index.html)

# ML & Data Science Projects

Production-focused ML projects demonstrating end-to-end system design — from model development through deployment and monitoring.

---

## <a name="project1"></a>Time Series Forecasting at Scale

![Forecasting Dashboard](./assets/img/Screenshot%202025-10-15%20120608.png)

![Forecasting Results](./assets/img/Screenshot%202025-10-15%20120714.png)

**Overview**: Production-grade forecasting portfolio with reusable ML components across retail sales, rideshare demand, and inventory planning.

### Challenge
- Forecasting solutions need to generalize across diverse business domains without rewriting pipelines
- Fair model comparison requires controlled experiments: same data splits, same metrics, same preprocessing
- Scaling to 80K+ time series samples while keeping experiments reproducible

### Architecture Decisions
- **Hydra for config management** — every experiment is fully reproducible from a single YAML file (model, data, hyperparameters). No hard-coded parameters.
- **MLflow for tracking** — all runs logged with metrics, parameters, and artifacts. Makes it trivial to compare statistical vs. deep learning approaches across domains.
- **Optuna for HPO** — Bayesian optimization over grid search. Optuna's pruning cuts unpromising trials early, saving compute on the 10+ architecture sweep.
- **FastAPI for serving** — prediction endpoints with confidence intervals, not just point forecasts. Dockerized for consistent deployment.
- **Streamlit for stakeholder demos** — interactive dashboard lets non-ML users explore forecasts and compare models visually.

### Model Zoo
- **Statistical**: LightGBM, XGBoost, CatBoost, Prophet, ARIMA, SARIMA
- **Deep Learning**: LSTM, TCN (Temporal Convolutional Networks), Transformer
- **Domains**: Walmart M5 retail sales, Ola rideshare demand, inventory planning, Transportation TSI

### Results
- **7.1% MAPE** on Walmart retail sales forecasting
- **80K+ time series samples** processed across 4 real-world projects
- **Production-ready pipeline**: data ingestion → training → serving (Dockerized)
- **Comprehensive benchmarking** of 10+ architectures with tracked experiments

**GitHub**: [View Repository](https://github.com/MrEleden/forecasting_demo) | **Live Demo**: [Try Streamlit App](https://forecastingdemo-jgkrsrcxen3wzvjcappbgra.streamlit.app/)

---

## <a name="project2"></a>Movie Recommendation System

**Overview**: End-to-end recommendation system demonstrating the complete ML lifecycle — from model training through experiment tracking to production deployment with global API access.

### Challenge
- Building multiple recommendation approaches that can be fairly compared under identical conditions
- Making ML demos accessible to non-technical users while maintaining engineering rigor
- Deploying a live system with low-latency inference

### Architecture Decisions
- **4 model architectures** for systematic comparison — deep collaborative filtering (neural matrix factorization), hybrid (combining collaborative + content signals), traditional collaborative filtering, and content-based filtering. Each shares the same training/eval harness.
- **Hydra + MLflow + Optuna stack** — same reproducibility stack as the forecasting project. Consistent tooling across projects reduces cognitive overhead and makes cross-project patterns transferable.
- **Dual deployment** — Gradio for quick interactive demos (model comparison), Streamlit for richer exploration. Both served from the same model artifacts.
- **Hugging Face Spaces** — zero-ops deployment with global CDN. Good enough for demos; production would use FastAPI behind a load balancer.

### Results
- **RMSE ~0.323** on MovieLens test set (610 users, 9,742 movies, 100K+ ratings)
- **Live deployment** on [Hugging Face Spaces](https://huggingface.co/spaces/MrEleden/movie-reco-demo)
- **Full ML lifecycle**: data pipeline → training → HPO → serving → monitoring
- **Multiple interfaces**: Gradio, Streamlit, REST API

**GitHub**: [View Repository](https://github.com/MrEleden/reco_app) | **Demo**: [Try Live Demo](https://huggingface.co/spaces/MrEleden/movie-reco-demo)

---

## <a name="project3"></a>Floorplan Wall Segmentation (2D to 3D)

![Wall Segmentation Results](./assets/img/best_validation_sample.png)

**Overview**: Computer vision for semantic segmentation of architectural floorplans — identifying walls to enable automated 2D-to-3D conversion.

### Challenge
- **Extreme class imbalance** in RPLAN dataset: 96.2% background, 3.7% walls, 0.01% rooms
- Processing 80K+ architectural floorplan images (64K train, 16K val)
- Accurate wall boundary detection needed for downstream 3D reconstruction

### Architecture Decisions
- **DeepLabV3 + ResNet50** — atrous convolution captures multi-scale context, critical for walls that vary from thin lines to thick structural elements. Transfer learning from ImageNet provides strong feature extraction despite the domain gap.
- **Class weighting** — standard cross-entropy would ignore the 3.7% wall class entirely. Inverse-frequency weighting forces the model to learn wall boundaries.
- **OpenCV postprocessing** — morphological closing/opening + connected component analysis cleans up noisy predictions. Cheaper than training a larger model and more interpretable.
- **Mixed precision (AMP)** — halves GPU memory usage, enabling larger batch sizes on the 80K image dataset without sacrificing accuracy.
- **ONNX export** — decouples inference from PyTorch. Enables deployment on edge devices or non-Python backends.
- **Hydra configs** — swap architectures (DeepLabV3 vs. U-Net) or hyperparameters without touching code.

### Results
- **99.4% overall accuracy** despite extreme class imbalance
- **80K+ images processed**: 64K training, 16K validation
- **50ms average inference time** — fast enough for interactive use
- **ONNX export** for cross-platform deployment
- **Comprehensive analysis**: Jupyter notebooks documenting the full pipeline

**GitHub**: [View Repository](https://github.com/MrEleden/computer_vision_2d_to_3d)

---

## More Projects

Explore my [GitHub profile](https://github.com/MrEleden) for additional projects and contributions.

### Stack Across Projects
- **ML**: PyTorch, scikit-learn, XGBoost, LightGBM
- **MLOps**: Hydra, MLflow, Optuna, Docker
- **Serving**: FastAPI, Streamlit, Gradio, Hugging Face Spaces
- **CV**: DeepLabV3, OpenCV, Albumentations, ONNX
- **Time Series**: Prophet, ARIMA, LSTM, TCN, Transformer

---

[← Back to Home](./index.html) | [About Me →](./about.html) | [Contact →](./contact.html)
