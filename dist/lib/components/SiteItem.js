"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var default_1 = __importDefault(require("part:@sanity/components/buttons/default"));
var SiteItem_css_1 = __importDefault(require("./SiteItem.css"));
var SiteItem = /** @class */ (function (_super) {
    __extends(SiteItem, _super);
    function SiteItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            badgeSuffix: 0,
            buttonDisabled: false,
            // buttonText: 'Deploy',
            imageUrl: '',
        };
        _this.handleDeployButtonClicked = function (_) {
            _this.props.onDeploy(_this.props.site);
            _this.setState({ buttonDisabled: true });
            setTimeout(function () {
                _this.updateImage();
            }, 5000);
            setTimeout(function () {
                _this.setState({ buttonDisabled: false });
            }, 20000);
        };
        return _this;
    }
    SiteItem.prototype.updateImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.setState({ badgeSuffix: this.state.badgeSuffix + 1 }, function () {
                    _this.updateImageUrl();
                });
                return [2 /*return*/];
            });
        });
    };
    SiteItem.prototype.componentDidMount = function () {
        var _this = this;
        this.updateImage();
        this.imgInterval = window.setInterval(function () {
            _this.updateImage();
        }, 10000);
    };
    SiteItem.prototype.componentWillUnmount = function () {
        window.clearInterval(this.imgInterval);
    };
    SiteItem.prototype.updateImageUrl = function () {
        var site = this.props.site;
        this.setState({
            imageUrl: "https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/instantrahmen/19c87ce1f1083bf152221bdac86f1c7c/raw/tsukimoon-status-badge.json?random=" + this.state.badgeSuffix,
        });
    };
    SiteItem.prototype.renderLinks = function () {
        var site = this.props.site;
        if (!site.url) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            ' (',
            site.url && (react_1.default.createElement("span", null,
                react_1.default.createElement("a", { href: site.url, target: 'blank' }, "view"))),
            ')'));
    };
    SiteItem.prototype.render = function () {
        var site = this.props.site;
        var buttonProps = {
            disabled: this.state.buttonDisabled,
        };
        return (react_1.default.createElement("li", { className: SiteItem_css_1.default.root },
            react_1.default.createElement("div", { className: SiteItem_css_1.default.status },
                react_1.default.createElement("h4", { className: SiteItem_css_1.default.title },
                    site.title,
                    this.renderLinks()),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("svg", { height: "20" },
                        react_1.default.createElement("image", { xlinkHref: this.state.imageUrl, height: "20" })))),
            react_1.default.createElement("div", { className: SiteItem_css_1.default.actions },
                react_1.default.createElement(default_1.default, __assign({ inverted: true, onClick: this.handleDeployButtonClicked }, buttonProps), this.state.buttonDisabled ? 'Deploying...' : 'Deploy'))));
    };
    return SiteItem;
}(react_1.default.Component));
exports.default = SiteItem;
//# sourceMappingURL=SiteItem.js.map