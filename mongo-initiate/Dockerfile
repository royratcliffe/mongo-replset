FROM mongo:latest
COPY initiate.js .
CMD mongo --eval "var repl_set = \"${REPL_SET}\"" mongodb://mongo-0 initiate.js
