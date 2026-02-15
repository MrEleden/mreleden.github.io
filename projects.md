---
layout: default
title: Projects
---

# Projects

Production-focused ML projects — end-to-end system design from model development through deployment and monitoring.

---

## <a name="project1"></a>Time Series Forecasting at Scale

> **Stack**: PyTorch, Hydra, MLflow, Optuna, FastAPI, Docker, Streamlit
> **Result**: 7.1% MAPE on Walmart M5 (28-day horizon, walk-forward validation, no data leakage)
> **Links**: [Repo](https://github.com/MrEleden/forecasting_demo) &#124; [Demo](https://forecastingdemo-jgkrsrcxen3wzvjcappbgra.streamlit.app/) *(~30s cold start)*

![Forecasting Dashboard](./assets/img/Screenshot%202025-10-15%20120608.png)

![Forecasting Results](./assets/img/Screenshot%202025-10-15%20120714.png)

Production-grade forecasting portfolio with reusable ML components across retail sales, rideshare demand, and inventory planning.

### Challenge
- Forecasting solutions need to generalize across diverse business domains without rewriting pipelines
- Fair model comparison requires controlled experiments: same data splits, same metrics, same preprocessing
- Scaling to 80K+ time series samples while keeping experiments reproducible

### Architecture Decisions
- **Hydra for config management** — every experiment is fully reproducible from a single YAML file. No hard-coded parameters.
- **MLflow for tracking** — all runs logged with metrics, parameters, and artifacts. Trivial to compare statistical vs. deep learning approaches across domains.
- **Optuna for HPO** — Bayesian optimization over grid search. Pruning cuts unpromising trials early, saving compute on the 10+ architecture sweep.
- **FastAPI for serving** — prediction endpoints with confidence intervals, not just point forecasts. Dockerized for consistent deployment.
- **Streamlit for stakeholder demos** — interactive dashboard lets non-ML users explore forecasts and compare models visually.

### Model Zoo
- **Statistical**: LightGBM, XGBoost, CatBoost, Prophet, ARIMA, SARIMA
- **Deep Learning**: LSTM, TCN, Transformer
- **Domains**: Walmart M5 retail, Ola rideshare, inventory planning, Transportation TSI

### Results
- **7.1% MAPE** on Walmart retail (28-day forecast horizon, walk-forward validation)
- **80K+ time series samples** across 4 real-world projects
- **Production pipeline**: data ingestion → training → serving (Dockerized)
- **10+ architectures** benchmarked with tracked experiments

---

## <a name="project2"></a>Movie Recommendation System

> **Stack**: PyTorch, Hydra, MLflow, Optuna, Gradio, Streamlit
> **Result**: RMSE ~0.323 on MovieLens (610 users, 9,742 movies, 100K+ ratings)
> **Links**: [Repo](https://github.com/MrEleden/reco_app) &#124; [Demo](https://huggingface.co/spaces/MrEleden/movie-reco-demo) *(~30s cold start)*

End-to-end recommendation system — full ML lifecycle from training through experiment tracking to production deployment with global API access.

### Challenge
- Building multiple recommendation approaches that can be fairly compared under identical conditions
- Making ML demos accessible to non-technical users while maintaining engineering rigor
- Deploying a live system with low-latency inference

### Architecture Decisions
- **4 model architectures** for systematic comparison — deep collaborative filtering (neural matrix factorization), hybrid (collaborative + content signals), traditional collaborative filtering, and content-based. Each shares the same training/eval harness.
- **Hydra + MLflow + Optuna** — same reproducibility stack as the forecasting project. Consistent tooling across projects reduces cognitive overhead.
- **Dual deployment** — Gradio for quick interactive demos, Streamlit for richer exploration. Both served from the same model artifacts.
- **Hugging Face Spaces** — zero-ops deployment with global CDN.

### Results
- **RMSE ~0.323** on MovieLens test set
- **Live deployment** on [Hugging Face Spaces](https://huggingface.co/spaces/MrEleden/movie-reco-demo)
- **Full ML lifecycle**: data pipeline → training → HPO → serving
- **Multiple interfaces**: Gradio, Streamlit, REST API

---

## <a name="project3"></a>Floorplan Wall Segmentation (2D to 3D)

> **Stack**: PyTorch, DeepLabV3, OpenCV, Hydra, ONNX
> **Result**: 99.4% pixel accuracy — wall-class F1 significantly above baseline despite 96/4 class split, 50ms inference
> **Links**: [Repo](https://github.com/MrEleden/computer_vision_2d_to_3d)

![Wall Segmentation Results](./assets/img/best_validation_sample.png)

Computer vision for semantic segmentation of architectural floorplans — identifying walls to enable automated 2D-to-3D conversion.

### Challenge
- **Extreme class imbalance** in RPLAN dataset: 96.2% background, 3.7% walls, 0.01% rooms
- Processing 80K+ architectural floorplan images (64K train, 16K val)
- Accurate wall boundary detection needed for downstream 3D reconstruction

### Architecture Decisions
- **DeepLabV3 + ResNet50** — atrous convolution captures multi-scale context, critical for walls that vary from thin lines to thick structural elements. Transfer learning from ImageNet despite the domain gap.
- **Class weighting** — standard cross-entropy would ignore the 3.7% wall class. Inverse-frequency weighting forces the model to learn wall boundaries.
- **OpenCV postprocessing** — morphological closing/opening + connected component analysis cleans up noisy predictions. Cheaper and more interpretable than a larger model.
- **Mixed precision (AMP)** — halves GPU memory, enabling larger batch sizes on the 80K dataset.
- **ONNX export** — decouples inference from PyTorch. Enables deployment on edge devices or non-Python backends.

### Results
- **99.4% pixel accuracy** — note: with 96% background, pixel accuracy alone is misleading. The model's value is in wall-class performance (F1/Dice significantly above a naive baseline)
- **80K+ images**: 64K training, 16K validation
- **50ms inference** — fast enough for interactive use
- **ONNX export** for cross-platform deployment

---

## More Projects

[GitHub profile](https://github.com/MrEleden) for additional projects and contributions.
