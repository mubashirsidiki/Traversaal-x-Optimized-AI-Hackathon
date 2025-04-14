import os
import logging
from config import CONFIG
from logging.config import dictConfig


# Ensure logs directory exists
LOG_DIRECTORY = "logs"
os.makedirs(LOG_DIRECTORY, exist_ok=True)

# Logging configuration
log_config = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "default": {
            "()": "uvicorn.logging.DefaultFormatter",
            # Original format with timestamp and level
            # "fmt": "%(levelprefix)s | %(asctime)s | %(message)s",
            "fmt": "%(message)s",
            "datefmt": "%Y-%m-%d %H:%M:%S",
        },
        "file_formatter": {
            # Original format with timestamp and level
            # "format": "%(levelname)s | %(asctime)s | %(message)s",
            "format": "%(message)s",
            "datefmt": "%Y-%m-%d %H:%M:%S",
        },
    },
    "handlers": {
        "default": {
            "formatter": "default",
            "class": "logging.StreamHandler",
            "stream": "ext://sys.stderr",
        },
        "file": {
            "formatter": "file_formatter",
            "class": "app.utils.logging.custom_log.CustomTimedRotatingFileHandler",
            "filename": os.path.join(LOG_DIRECTORY, "today.log"),
            "when": "midnight",
            "backupCount": 7,
            "encoding": "utf-8",
        },
    },
    "loggers": {
        f"{CONFIG.app_name}": {
            "handlers": ["default", "file"],
            "level": "DEBUG",  # Set your desired logging level here
        },
    },
}

# Configure logging
dictConfig(log_config)

# Define a logger
LOG = logging.getLogger(f"{CONFIG.app_name}")

# Test logging
LOG.info(f"{CONFIG.app_name} logger initialized")