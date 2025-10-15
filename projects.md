---
layout: default
title: Projects
---

[← Back to Home](./index.html)

# 📁 ML & Data Science Projects

Here's a comprehensive overview of my machine learning and data science projects. Each project demonstrates different aspects of my skills, from model development to deployment and production-ready MLOps workflows.

---

## <a name="project1"></a>� Time Series Forecasting Demo

**Overview**: Production-grade forecasting portfolio demonstrating reusable ML components across diverse domains including retail sales, rideshare demand, and inventory planning.

### Challenge
- Building production-ready forecasting solutions requires reusable components that work across diverse business domains
- Need for comprehensive model benchmarking (statistical vs. deep learning approaches)
- Creating reproducible, config-driven experiments with proper tracking
- Scaling to handle 80K+ time series samples efficiently

### Solution
- Developed comprehensive model zoo with **10+ architectures**:
  - **Statistical Models**: LightGBM, XGBoost, CatBoost, Prophet, ARIMA, SARIMA
  - **Deep Learning Models**: LSTM, TCN (Temporal Convolutional Networks), Transformer
- Implemented **Hydra configuration system** for reproducible experiments
- Integrated **MLflow** for experiment tracking and model versioning
- Built **Optuna-powered** hyperparameter optimization pipeline
- Created **Streamlit dashboard** for interactive model comparison and visualization
- Developed **FastAPI serving endpoint** with prediction intervals and confidence metrics
- Dockerized the entire stack for consistent deployment

### Technical Details
```python
# Project Structure
src/ml_portfolio/
├── models/          # Model implementations (statistical & DL)
├── data/            # Data loaders and preprocessing
├── training/        # Training loops and callbacks
├── evaluation/      # Metrics and visualization
├── serving/         # FastAPI endpoints
└── configs/         # Hydra configuration files

# Key Projects Implemented
1. Walmart Retail Sales (M5 Competition)
2. Ola Rideshare Demand Forecasting
3. Inventory Planning System
4. Transportation TSI Dataset

# Technologies
- PyTorch for deep learning models
- Hydra for configuration management
- MLflow for experiment tracking
- Optuna for hyperparameter optimization
- Streamlit for interactive dashboards
- FastAPI for production serving
- Docker for containerization
```

### Results
- ✅ **7.1% MAPE** on Walmart retail sales forecasting
- ✅ **80K+ time series samples** processed across 4 real-world projects
- ✅ **Production-ready MLOps workflow**: data → training → serving
- ✅ **Comprehensive benchmarking** of 10+ model architectures
- ✅ **Interactive dashboard** with real-time forecast visualization
- ✅ **Dockerized deployment** ready for cloud platforms

**GitHub**: [View Repository](https://github.com/MrEleden/forecasting_demo) | **Live Demo**: [Try Streamlit App](https://forecastingdemo-jgkrsrcxen3wzvjcappbgra.streamlit.app/)

---

## <a name="project2"></a>🎬 Movie Recommendation System

**Overview**: End-to-end recommendation system demonstrating the complete ML lifecycle from PyTorch basics to production deployment with comprehensive experiment tracking and hyperparameter tuning.

### Challenge
- Demonstrate the evolution from basic PyTorch implementation to production-ready system
- Implement multiple recommendation approaches (collaborative filtering, content-based, hybrid)
- Build robust MLOps pipeline with experiment tracking and hyperparameter optimization
- Create interactive demos accessible to non-technical users
- Deploy live system on cloud platform with global API access

### Solution
- Implemented **4 recommendation models**:
  - **Deep Collaborative Filtering**: Neural network-based matrix factorization
  - **Hybrid Model**: Combining collaborative and content-based features
  - **Collaborative Filtering**: Traditional matrix factorization approach
  - **Content-Based Filtering**: Movie features and user preferences
- Processed **MovieLens dataset**: 610 users, 9,742 movies, 100K+ ratings
- Built **Hydra configuration management** for reproducible experiments
- Integrated **MLflow** for comprehensive experiment tracking and model versioning
- Implemented **Optuna** for automated hyperparameter optimization
- Created **dual deployment strategy**:
  - Interactive **Gradio demo** for model comparison
  - Feature-rich **Streamlit app** for exploration
- Deployed live on **Hugging Face Spaces** for public access
- Built **global inference API** for easy integration

### Technical Details
```python
# Architecture
src/
├── models/
│   ├── deep_cf.py          # Deep Collaborative Filtering
│   ├── hybrid.py           # Hybrid recommender
│   ├── collaborative.py    # Matrix factorization
│   └── content_based.py    # Content-based filtering
├── training/
│   ├── train.py            # Training pipeline with MLflow
│   └── optimize.py         # Optuna hyperparameter tuning
├── serving/
│   ├── gradio_app.py       # Interactive demo
│   └── streamlit_app.py    # Full-featured app
└── configs/                # Hydra configuration files

# Technologies Stack
- PyTorch: Deep learning framework
- Hydra: Configuration management
- MLflow: Experiment tracking
- Optuna: Hyperparameter optimization
- Gradio: Interactive ML demos
- Streamlit: Data apps
- Pandas/NumPy: Data processing
- Scikit-learn: Utilities and metrics
```

### Results
- ✅ **RMSE ~0.323** on test set with optimized hyperparameters
- ✅ **Live Demo Deployed**: [https://huggingface.co/spaces/MrEleden/movie-reco-demo](https://huggingface.co/spaces/MrEleden/movie-reco-demo)
- ✅ **100K+ ratings processed** with efficient data pipeline
- ✅ **Complete ML lifecycle** demonstrated: data → training → serving
- ✅ **Multiple deployment options**: Gradio, Streamlit, REST API
- ✅ **Reproducible research** with full experiment tracking via MLflow

**GitHub**: [View Repository](https://github.com/MrEleden/reco_app) | **Demo**: [Try Live Demo](https://huggingface.co/spaces/MrEleden/movie-reco-demo)

---

## <a name="project3"></a>🏗️ Floorplan Wall Segmentation (2D to 3D)

**Overview**: Computer vision project for semantic segmentation of architectural floorplans, identifying walls to enable automated 2D-to-3D conversion for architectural visualization.

### Challenge
- **Severe class imbalance** in RPLAN dataset:
  - Background: 96.2%
  - Walls: 3.7%
  - Rooms: 0.01%
- Processing **80K+ architectural floorplan images** (64K train, 16K val)
- Achieving accurate wall boundary detection for 3D reconstruction
- Building production-ready pipeline with deployment flexibility
- Handling diverse architectural styles and floor plan layouts

### Solution
- Implemented **DeepLabV3 with ResNet50 backbone** for semantic segmentation
- Developed comprehensive **preprocessing pipeline** for RPLAN dataset normalization
- Built **postprocessing pipeline** using OpenCV for wall refinement:
  - Morphological operations (closing, opening)
  - Connected component analysis
  - Noise reduction and boundary smoothing
- Implemented **mixed precision training (AMP)** for efficient GPU utilization
- Created **Hydra-based configuration system** for model selection and hyperparameters
- Exported models to **ONNX format** for deployment flexibility
- Developed detailed **Jupyter notebooks** for:
  - Dataset analysis and class distribution visualization
  - Validation demo with before/after comparisons
  - Postprocessing effectiveness analysis
- Implemented comprehensive **metrics tracking**: IoU, Dice coefficient, pixel accuracy

### Technical Details
```python
# Project Structure
src/
├── models/
│   ├── deeplabv3.py        # DeepLabV3 implementation
│   └── unet.py             # Alternative architecture
├── data/
│   ├── rplan_dataset.py    # RPLAN data loader
│   └── transforms.py       # Augmentations
├── training/
│   └── train.py            # Training loop with AMP
├── postprocessing/
│   └── morphology.py       # OpenCV operations
├── export/
│   └── onnx_export.py      # Model export
└── configs/                # Hydra configs

# Technologies Stack
- PyTorch: Deep learning framework
- DeepLabV3: State-of-the-art semantic segmentation
- OpenCV: Image processing and morphology
- Hydra: Configuration management
- ONNX: Model export for deployment
- Albumentations: Advanced augmentations
- NumPy/Matplotlib: Analysis and visualization

# Key Techniques
- Transfer Learning: ResNet50 backbone
- Mixed Precision Training: Faster training
- Morphological Operations: Wall refinement
- Class Weighting: Handle imbalance
```

### Results
- ✅ **99.4% overall accuracy** despite extreme class imbalance
- ✅ **80K+ images processed**: 64K training, 16K validation
- ✅ **Robust postprocessing**: Morphology operations improve segmentation quality
- ✅ **Production-ready**: ONNX export for cross-platform deployment
- ✅ **Comprehensive analysis**: Jupyter notebooks document full pipeline
- ✅ **Flexible configuration**: Hydra system for easy experimentation

**GitHub**: [View Repository](https://github.com/MrEleden/computer_vision_2d_to_3d)
- Average inference time: 50ms

**GitHub**: [View Repository](#)

---

## 📈 Time Series Forecasting

**Overview**: Built forecasting models for sales prediction using historical data and external features.

### Approach
- ARIMA, SARIMA for baseline
- Prophet for handling seasonality
- LSTM for complex patterns
- Ensemble model for final predictions

### Results
- MAPE (Mean Absolute Percentage Error): 8.5%
- Successfully predicted seasonal peaks
- Integrated with inventory management system

**GitHub**: [View Repository](https://github.com/MrEleden/computer_vision_2d_to_3d)

---

## � More Projects

Explore my [GitHub profile](https://github.com/MrEleden) for additional projects, code samples, and contributions.

### Key Technologies Across Projects
- **ML Frameworks**: PyTorch, TensorFlow, Scikit-learn
- **MLOps**: Hydra, MLflow, Optuna, Docker
- **Deployment**: Streamlit, Gradio, FastAPI, Hugging Face Spaces
- **Computer Vision**: DeepLabV3, OpenCV, Albumentations, ONNX
- **Time Series**: Prophet, ARIMA, LSTM, TCN, Transformer
- **Data Processing**: Pandas, NumPy, SQL

---

[← Back to Home](./index.html) | [About Me →](./about.html) | [Contact →](./contact.html)
